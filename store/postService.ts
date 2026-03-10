import { Post } from "./post.types";
import axios from "axios";
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const POST_PARAM = '/posts';

const api = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})

export const postService = {
    getAll: () => api.get<Post[]>(POST_PARAM).then((res) => res.data),
    create: (post: Omit<Post, 'id' | "userId">) => api.post(POST_PARAM, post).then((res) => res.data),
    update: (id: number, post: Partial<Omit<Post, "id">>) => api.put(`${ POST_PARAM }/${ id }`, post).then((res) => res.data),
    delete: (id: number) => api.delete(`${ POST_PARAM }/${ id }`).then((res) => res.data),
}