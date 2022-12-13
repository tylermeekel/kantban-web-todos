<script lang="ts">
	import showCreateTodoState from "../stores/StateStore";
    import boards from '../stores/BoardStore'
    import CreateTodo from "../components/CreateTodo.svelte";
    import type { Board } from "../classes/Board";
	import BoardComponent from "../components/BoardComponent.svelte";
	import { browser } from "$app/environment";

    let boardsData: Array<Board>;
    let showCreateTodo:boolean;

    if(browser){ //Make sure these lines are only processed locally and not on the server
        if(localStorage.getItem('data')){ //Check for any local data
            boards.set(JSON.parse(localStorage.getItem('data') || '{}')); //Update boards to reflect local data if it exists
        }
    }

    boards.subscribe((data: Board[]) => { //Keeps data in sync with store
        boardsData = data;
    })

    showCreateTodoState.subscribe(data => { //Pulls data from store to use for visibility of Todo dialogue box
        showCreateTodo = data;
    })

    function toggleShowCreateTodo(): void { //Handles toggling for the visibility of the Todo add dialogue box
        showCreateTodoState.set(true)
    }

    export function save() { //Function for saving data to localStorage
        if(browser){ 
            let jsonData = JSON.stringify(boardsData)
            localStorage.setItem('data', jsonData)
        }
        
    }

</script>

{#if showCreateTodo == true}
    <CreateTodo />
{/if}

<div class="h-full w-screen flex flex-col">
    <header class=" h-20 w-screen bg-gray-200 flex items-center p-1 drop-shadow-md shadow-stone-900 justify-between">
        <h1 class="text-3xl ml-2">Kan(t)ban</h1>
        <button class="mr-2 bg-gray-900 p-2 rounded-lg text-gray-100" on:click={save}>
            Save
        </button>
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