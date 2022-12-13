<script lang="ts">
    import showCreateTodoState from "../stores/StateStore";
    import type { Board } from '../classes/Board'
    import { TodoState } from '../classes/Todo'
    import boards from "../stores/BoardStore";
    import { fly, slide } from "svelte/transition";

    function closeShowCreateTodo() {
        showCreateTodoState.set(false)
    }

    let boardsData: Board[];
    let title = ""
    let desc = ""

    boards.subscribe((data: Board[]) => {
        boardsData = data;
    })

    const handleSubmit = () => {
        if(title.length > 0 && desc.length > 0){
            boardsData[0].data.push({ title: title, description: desc, state: TodoState.NotStarted})
            boards.set(boardsData)
            showCreateTodoState.set(false)
        }
    }
</script>

<div
	class="
    fixed
    top-1/2 left-1/2
    h-72 w-96
    p-5
    rounded-md
    flex
    flex-col
    items-center
    justify-around
    shadow-inner
    shadow-gray-900
    bg-gray-700"
	style="transform: translate(-50%, -50%);"
    transition:slide
>
	<div class="fixed top-2 right-2 h-3 w-3 bg-red-400 text-xs rounded-md cursor-pointer" on:click={closeShowCreateTodo} on:keydown={closeShowCreateTodo}/>
	<h3 class="text-gray-400 text-2xl font-bold">Create New Task</h3>
	<form on:submit|preventDefault={handleSubmit} style="height: 80%; display: flex; flex-direction: column; justify-content: space-evenly;">
		<h4 class="text-gray-400">Title</h4>
		<input
			type="text"
			name="title"
			id="titleinput"
			style="outline: none;"
			class="p-2 bg-gray-800 text-2xl shadow-inner text-zinc-300 rounded-md shadow-gray-900"
            bind:value={title}
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h4 class="text-gray-400">Description</h4>
		<textarea
			name=""
			id=""
			style="outline: none;"
			class="p-2 resize-none bg-gray-800 shadow-inner text-lg text-zinc-300 rounded-md shadow-gray-900"
            bind:value={desc}
		/>
        <button class="h-6 w-6 rounded-md cursor-pointer bg-emerald-200 text-center mt-3 self-center">+</button>
	</form>
</div>
