//State for default boards

import type { Board } from "../classes/Board"
import { writable } from "svelte/store"
import { TodoState, type Todo } from "../classes/Todo"

let board1: Board = {title: "Not Started", data: []}
let board2: Board = {title: "In Progress", data: []}
let board3: Board = {title: "Complete", data: []}
const boards = writable([board1, board2, board3])

export default boards