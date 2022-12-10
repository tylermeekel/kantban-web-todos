<script lang="ts">
    import showCreateTodoState from "../stores/StateStore";
    import { slide } from "svelte/transition";

    function closeShowCreateTodo() {
        showCreateTodoState.set(false)
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
    bg-gray-400"
	style="transform: translate(-50%, -50%);"
    transition:slide
>
	<div class="fixed top-2 right-2 h-3 w-3 bg-red-400 text-xs rounded-md cursor-pointer" on:click={closeShowCreateTodo} on:keydown={closeShowCreateTodo}/>
	<h3 class="text-zinc-900 text-2xl font-bold">Create New Task</h3>
	<form style="height: 80%; display: flex; flex-direction: column; justify-content: space-evenly;">
		<h4 class="text-zinc-900">Title</h4>
		<input
			type="text"
			name="title"
			id="titleinput"
			style="outline: none;"
			class="p-2 bg-gray-700 text-2xl shadow-inner text-zinc-300 rounded-md shadow-gray-800"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<h4 class="text-zinc-900">Description</h4>
		<textarea
			name=""
			id=""
			style="outline: none;"
			class="p-2 resize-none bg-gray-700 shadow-inner text-lg text-zinc-300 rounded-md shadow-gray-800"
		/>
	</form>
	<div class="h-6 w-6 rounded-md cursor-pointer bg-emerald-200 text-center mt-3">+</div>
</div>
