export enum TodoState {
    NotStarted,
    InProgress,
    Done
}

export class Todo {
    title: string;
    description: string;
    state: TodoState;

    constructor(title: string, description: string, state: TodoState) {
        this.title = title;
        this.description = description;
        this.state = state;
    }
}