export interface Task {
    id: string;
    title: string;
    priority: 1 | 2 | 3;
    done: boolean;
    createdAt: number;
}