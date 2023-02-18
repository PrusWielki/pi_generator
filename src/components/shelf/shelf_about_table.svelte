<script lang="ts">
    import { onMount } from 'svelte';

    export let openAbout: boolean;
	let ready = false;
	onMount(() => (ready = true));
</script>
<div>
    <div on:keypress={()=>{openAbout=false}} on:click={()=>{openAbout=false;}} class={`right-full w-2/3 top-0 bg-black transition duration-700 delay-150 opacity-10 h-screen fixed ${openAbout?'translate-x-full':''}`} />
<div class={`transition duration-700 delay-150 fixed left-full top-0 w-1/3 h-screen bg-slate-400 dark:bg-stone-600 flex flex-col ${openAbout?'-translate-x-full':''}`}>
<div class="font-mono text-xl font-semibold text-center dark:text-slate-300">About</div>
<div class="font-mono text-lg text-center "></div>
</div> 
</div>