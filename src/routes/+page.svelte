<script lang="ts">
	import showCreateTodoState from "../stores/StateStore";
    import CreateTodo from "../components/CreateTodo.svelte";
	import TodoComponent from "../components/TodoComponent.svelte";

    let boards = ["Not Started", "In Progress", "Complete", "Yello", "Brello", "Schmello"];
    let showCreateTodo:boolean;

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

<div class="max-h-screen w-screen flex flex-col">
    <header class="h-20 w-screen bg-gray-200 flex items-center p-4 drop-shadow-md shadow-stone-900">
        <h1 class="text-4xl text-zinc-900 font-extralight">
            Kan(<span class="text-3xl">t</span>)ban
        </h1>
    </header>
    <main class="w-screen bg-gray-200 flex-1 flex gap-8 px-8 pt-8 overflow-x-scroll max-h-min">
        {#each boards as board}
            <div class="board min-w-fit max-h-96 flex-1 flex flex-col items-center p-3 rounded-2xl border-b-4 border-gray-700 overflow-y-scroll gap-3">
                <h1 class="text-gray-900 text-xl font-bold">
                    {board}
                </h1>
                <TodoComponent />
                <TodoComponent />
                <TodoComponent />
                <TodoComponent />
                <TodoComponent />
                <TodoComponent />
                <TodoComponent />
            </div>
        {/each}
    </main>
    <div class="bg-gray-200 flex justify-center items-center py-3">
        <div class="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer active:shadow-inner active:shadow-gray-600" on:click={toggleShowCreateTodo} on:keydown={toggleShowCreateTodo}>
            <div class="text-xl text-white">+</div>
        </div>
    </div>
    
</div>



<style>
    .board {
        max-height: 100%;
    }
</style>