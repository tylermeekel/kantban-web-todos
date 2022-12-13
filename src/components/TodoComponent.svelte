<script lang="ts">
	import type { Board } from "src/classes/Board";
	import { TodoState, type Todo } from "../classes/Todo";
    import boards from "../stores/BoardStore";


    export let givenTodo: Todo;

    let boardsData: Board[];

    boards.subscribe((data: Board[]) => { //Updates local data when store is updated
        boardsData = data;
    })

    function removeSelf() { //Removes todo from array
        switch(givenTodo.state) { //Finds array Todo is in
            case TodoState.NotStarted:
                boardsData[0].data.splice(boardsData[0].data.indexOf(givenTodo), 1)
                break;
            case TodoState.InProgress: 
                boardsData[1].data.splice(boardsData[1].data.indexOf(givenTodo), 1)
                break;
            case TodoState.Complete:
                boardsData[2].data.splice(boardsData[2].data.indexOf(givenTodo), 1)
                break;
        }
        boards.set(boardsData) //Sets boards store to new data
    }

    function moveToInProgress() { //Moves todo to completed array
        boardsData[0].data.splice(boardsData[0].data.indexOf(givenTodo), 1) //Finds Todo in old array and removes it
        boardsData[1].data.push(givenTodo) //Moves todo to new array
        givenTodo.state = TodoState.InProgress //Update state of todo
        boards.set(boardsData) //Update store to reflect updated data
    }

    function moveToCompleted () { //Moves Todo to "Completed" array
        boardsData[1].data.splice(boardsData[1].data.indexOf(givenTodo), 1)
        boardsData[2].data.push(givenTodo)
        givenTodo.state = TodoState.Complete
        boards.set(boardsData)
    }
</script>

<div class="group todo bg-gray-400 rounded-md flex flex-col items-center p-3 min-w-full">
    <div class="self-end flex gap-2">
        {#if givenTodo.state == TodoState.NotStarted} <!--Button to move task to "In Progress"-->
            <div class="opacity-0 bg-orange-400 p-1 rounded-lg cursor-pointer group-hover:opacity-100" title="Set to In Progress" on:click={moveToInProgress} on:keydown={moveToInProgress}>

            </div>
        {/if}
        {#if givenTodo.state == TodoState.InProgress} <!--Button to move task to "Complete"-->
            <div class="opacity-0 bg-green-400 p-1 rounded-lg cursor-pointer group-hover:opacity-100" title="Set to Completed" on:click={moveToCompleted} on:keydown={moveToCompleted}>

            </div>
        {/if}
        <!-- Button to delete Todo -->
        <div class="opacity-0 bg-red-500 rounded-lg p-1 text-xs cursor-pointer group-hover:opacity-100" on:click={removeSelf} on:keydown={removeSelf} title="Remove Todo">
        </div>
    </div>
    <h3 class="text-gray-800 font-black">{givenTodo.title}</h3>
    <p class="line-clamp text-gray-800 max-w-full text-base">{givenTodo.description}</p>
    
</div>

<style>
    .todo {
        width: 256px;
        max-height: 128px;
        aspect-ratio: 2/1;
    }
    .line-clamp { 
        /* clamps the paragraph to a size, and overflows with ellipses */
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; 
        overflow: hidden; 
}
</style>

