<script lang="ts">
	//import type { Todo } from "src/classes/Todo";


    //export let data: Todo;
</script>

<div class="todo bg-gray-400 rounded-md flex flex-col items-center p-3 min-w-full">
    <h3 class="text-gray-800 font-black">Title 1</h3>
    <p class="line-clamp text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

