import { Post } from "./post.types";

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const POST_URL = `${ BASE_URL }/posts`;

const fetcher = async <T>(URL: string,): Promise<T> => {
    const res = await fetch(`${ URL }`);
    return res.json();
}
const creator = async <Y, T>(input: Y, URL: string,): Promise<T> => {
    const res = await fetch(`${ URL }`,
        {
            method: 'POST',
            body: JSON.stringify(input),
            headers: { 'Content-Type': 'application/json' },
        }
    );
    return res.json();
}
const updater = async <Y, T>(id: number, body: Y, URL: string,): Promise<T> => {
    const res = await fetch(`${ URL }/${ id }`,
        {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }
    );
    return res.json();
}
const deleter = async (id: number, URL: string,): Promise<void> => {
    await fetch(`${ URL }/${ id }`, { method: 'DELETE', });
}

export const postService = {
    getAll: () => fetcher<Post[]>(POST_URL),
    create: (post: Omit<Post, 'id' | "userId">) => creator<Omit<Post, 'id' | "userId">, Post>(post, POST_URL),
    update: (id: number, post: Partial<Omit<Post, "id">>) => updater<Partial<Omit<Post, "id">>, Post>(id, post, POST_URL),
    delete: (id: number) => deleter(id, POST_URL)
}