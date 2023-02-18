<script lang="ts">

    export let openAbout:boolean = false;
</script>

<button on:click={()=>{openAbout=!openAbout}} class="fixed right-0 top-0 sm:my-8 my-3  mx-2 sm:mx-8 text-sm sm:text-lg border-black dark:bg-stone-800 dark:hover:bg-slate-300 dark:hover:text-black hover:bg-black hover:text-white rounded-md transition duration-700 dark:text-slate-300 dark:border-slate-300 border-2 font-mono sm:px-2 px-1 py-1 bg-white text-black sm:py-2">About</button>