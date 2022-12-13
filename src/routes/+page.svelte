<script lang="ts">
	import showCreateTodoState from "../stores/StateStore";
    import boards from '../stores/BoardStore'
    import CreateTodo from "../components/CreateTodo.svelte";
	import TodoComponent from "../components/TodoComponent.svelte";
    import type { Board } from "../classes/Board";
	import BoardComponent from "../components/BoardComponent.svelte";

    let boardsData: Array<Board>;
    let showCreateTodo:boolean;

    boards.subscribe((d: Board[]) => {
        boardsData = d;
    })

    showCreateTodoState.subscribe(data => { //Pulls data from store to use for visibility of Todo dialogue box
        showCreateTodo = data;
    })

    function toggleShowCreateTodo(): void { //Handles toggling for the visibility of the Todo add dialogue box
        showCreateTodoState.set(true)
    }
</script>

{#if showCreateTodo == true}
    <CreateTodo />
{/if}

<div class="h-full w-screen flex flex-col">
    <header class=" h-20 w-screen bg-gray-200 flex items-center p-1 drop-shadow-md shadow-stone-900">
        <h1 class="text-3xl ml-2">Kan(t)ban</h1>
    </header>
    <main class="w-screen bg-gray-200 flex-1 flex gap-8 px-8 pt-8 overflow-x-scroll">
        {#each boardsData as board}
            <BoardComponent board={board}/>
        {/each}
    </main>
    <div class="bg-gray-200 flex justify-center items-center py-3">
        <div class="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer active:shadow-inner active:shadow-gray-600" on:click={toggleShowCreateTodo} on:keydown={toggleShowCreateTodo}>
            <div class="text-xl text-white">+</div>
        </div>
    </div>
    
</div>



<style>
</style>