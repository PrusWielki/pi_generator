<script lang="ts">

import { theme } from "../../stores/main_store";
    const handleChangeLanguage=()=>{
        theme.update(value=>{
            if(value==='dark'){
document.documentElement.classList.remove('dark');return ('light');
            }
            else{
                document.documentElement.classList.add('dark');return ('dark');
            }})

    }
</script>

<button on:click={handleChangeLanguage} class="absolute l-0 top-0 my-8 mx-8 border-black dark:bg-stone-800 dark:hover:bg-slate-300 dark:hover:text-black hover:bg-black hover:text-white rounded-md transition duration-700 dark:text-slate-300 dark:border-slate-300 border-2 font-mono px-2 bg-white text-black py-2">Dark Mode</button>