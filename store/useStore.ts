import { create } from "zustand";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface Album {
  id: number;
  userId: number;
  title: string;
}

interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface StoreState {
  users: User[];
  posts: Post[];
  comments: Comment[];
  albums: Album[];
  photos: Photo[];
  todos: Todo[];
  fetchData: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  users: [],
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  fetchData: async () => {
    const [users, posts, comments, albums, photos, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    ]);

    set({ users, posts, comments, albums, photos, todos });
  },
}));
