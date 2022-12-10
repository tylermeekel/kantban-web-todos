import { writable } from "svelte/store";

//State for visibility of Todo add box
const showCreateTodoState = writable(false);

//Exports
export default showCreateTodoState;