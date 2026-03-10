export interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,
}
export type PostStatus = "deleting" | "updating" | "idle"
export interface PostStore {
    postsById: Record<string, Post>,
    postIds: number[],
    isLoading: boolean,
    activePostAction: { id: number, status: PostStatus } | null

    fetchPosts: () => Promise<void>,
    createPost: (input: Omit<Post, "id" | "userId">) => Promise<void>,
    updatePost: (id: number, update: Partial<Omit<Post, 'id'>>) => Promise<void>,
    deletePost: (id: number) => Promise<void>,
    setPosts: (posts: Post[]) => void,
}
