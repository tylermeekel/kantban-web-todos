import type { Board } from "./Board";

export enum TodoState {
    NotStarted,
    InProgress,
    Complete
}

export type Todo = {
    title: string;
    description: string;
    state: TodoState;
}