<!--Currently exists solely for adding support for adding new boards in the future-->
<script lang="ts">
    import type { Board } from "src/classes/Board";
	import TodoComponent from "./TodoComponent.svelte";
    export let board: Board;
</script>

<div class="board min-w-fit min-h-96 flex-1 flex flex-col items-center rounded-2xl border-b-4 border-gray-700 overflow-y-scroll gap-3">
    <h1 class="text-gray-900 text-xl font-bold">
        {board.title}
    </h1>
    <div class="flex flex-col gap-3">
        {#each board.data as todo}
            <TodoComponent givenTodo={todo}/>
        {/each}
    </div>
</div>