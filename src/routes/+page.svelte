<script lang="ts">
	import showCreateTodoState from "../stores/StateStore";
    import boards from '../stores/BoardStore'
    import CreateTodo from "../components/CreateTodo.svelte";
    import type { Board } from "../classes/Board";
	import BoardComponent from "../components/BoardComponent.svelte";
	import { browser } from "$app/environment";

    let boardsData: Array<Board>;
    let showCreateTodo:boolean;

    if(browser){ //Makes sure these lines are only processed locally and not on the server
        if(localStorage.getItem('data')){ //Check for any local data
            boards.set(JSON.parse(localStorage.getItem('data') || '[{"title":"Not Started","data":[]},{"title":"In Progress","data":[]},{"title":"Complete","data":[]}]')); //Update boards to reflect local data if it exists
        }
    }

    boards.subscribe((data: Board[]) => { //Keeps data in sync with store
        boardsData = data;
        if(browser && boardsData){ 
            let jsonData = JSON.stringify(boardsData)
            localStorage.setItem('data', jsonData)
        }
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
    <header class=" h-20 w-screen bg-gray-200 flex items-center p-1 drop-shadow-md shadow-stone-900 justify-between">
        <h1 class="text-3xl ml-2">Kan(t)ban</h1>
    </header>
    <main class="w-screen bg-gray-200 flex-1 flex gap-8 px-8 pt-8 overflow-x-scroll hidescroll">
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
    .hidescroll::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    .hidescroll {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>