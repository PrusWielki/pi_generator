<script lang="ts">

    const handleChangeLanguage=()=>{
        if(localStorage.theme === 'light')
        localStorage.theme = 'dark'
        else
        localStorage.theme = 'light'
    }
</script>

<button on:click={handleChangeLanguage} class="absolute l-0 top-0 my-8 mx-8 border-black dark:bg-stone-800 dark:hover:bg-slate-300 dark:hover:text-black hover:bg-black hover:text-white transition duration-700 dark:text-slate-300 dark:border-slate-300 border-2 font-mono px-2 bg-white text-black py-2">Dark Mode</button>