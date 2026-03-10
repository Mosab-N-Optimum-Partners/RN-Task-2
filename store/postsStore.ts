import Toast from 'react-native-toast-message';
import { StateCreator } from './../node_modules/zustand/vanilla.d';
import { Post, PostStore } from "./post.types";
import { postService } from './postService';
import { create } from 'zustand';

const createPostStore: StateCreator<PostStore, [], [], PostStore> = (set, get) => ({
    postsById: {},
    postIds: [],
    isLoading: false,
    activePostAction: null,
    setPosts(posts) {
        const byId: Record<number, Post> = {};
        const ids: number[] = [];

        for (const post of posts)
        {
            byId[ post.id ] = post;
            ids.push(post.id)
        }
        set({ postsById: byId, postIds: ids })
    },
    async fetchPosts() {
        set({ isLoading: true })
        try
        {
            const posts = await postService.getAll()
            get().setPosts(posts);
        }
        catch (error) { Toast.show({ type: 'error', text1: 'Fetching failed!' }); }
        finally { set({ isLoading: false }) }
    },
    async createPost(input) {
        set({ isLoading: true })
        try
        {
            const newPost = await postService.create(input);
            const existingIds = get().postIds;
            const newId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1
            const postWithNewId: Post = {
                ...newPost,
                id: newId,
                userId: 11
            }
            set((state) => ({
                postsById: { ...state.postsById, [ newId ]: postWithNewId },
                postIds: [ ...state.postIds, newId ]
            }))
            Toast.show({ type: 'success', text1: 'Post created!' });

        }
        catch (error)
        {
            Toast.show({ type: 'error', text1: 'Creating post failed' });
        }
        finally { set({ isLoading: false }) }

    },
    async updatePost(id, update) {
        const existingPost = get().postsById[ id ];
        if (!existingPost) return;
        set({ activePostAction: { id, status: 'updating' } });
        try
        {
            const updated = await postService.update(id, update);

            set((state) => ({
                postsById: { ...state.postsById, [ id ]: updated }
            }));
            Toast.show({ type: 'success', text1: 'Post Updated!' });

        }
        catch (error)
        {
            Toast.show({ type: 'error', text1: 'Updating post failed' });
        }
        finally { set({ activePostAction: null }) }

    },
    async deletePost(id) {
        const existingPost = get().postsById[ id ];
        if (!existingPost) return;
        set({ activePostAction: { id, status: 'deleting' } });

        try
        {
            await postService.delete(id);
            set((state) => {
                const { [ id ]: postToDelete, ...rest } = state.postsById;
                const newIds = state.postIds.filter((postId) => postId !== id)
                return {
                    postsById: rest,
                    postIds: newIds,
                }
            })
            Toast.show({ type: 'success', text1: 'Post Deleted!' });

        }
        catch (error)
        {
            Toast.show({ type: 'error', text1: 'Deleting post failed' });
        }
        finally { set({ activePostAction: null }) }
    },
})

export const usePostStore = create<PostStore>(createPostStore)