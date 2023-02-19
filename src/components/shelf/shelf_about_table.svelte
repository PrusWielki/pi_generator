<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '../../stores/main_store';

    export let openAbout: boolean;
	let ready = false;
    let subsTheme:string;
	onMount(() => (ready = true));

    theme.subscribe(value => {
		subsTheme = value;
	});
</script>
<div>
    <div on:keypress={()=>{openAbout=false}} on:click={()=>{openAbout=false;}} class={`right-full w-2/3 top-0 bg-black transition duration-700 delay-150 opacity-10 h-screen fixed ${openAbout?'translate-x-full':''}`} />
<div class={`transition duration-700 delay-150 fixed left-full top-0 w-1/3 min-h-screen bg-slate-400 ${subsTheme==='dark'?"bg-[url('/bg-dark-new.svg')]":"bg-[url('/bg-wave-light.svg')]"} bg-cover rotate-[180] flex flex-col ${openAbout?'-translate-x-full':''}`}>
<div class="font-mono text-xl font-semibold text-center dark:text-slate-300 mt-8">About</div>
<div class="font-mono text-lg text-center mt-8">*content goes here*</div>
<div class="font-mono text-xl font-semibold text-center dark:text-slate-300 mt-8">Average timings:</div>
<div class="grid grid-cols-2 divide-slate-600 divide-double text-center px-2 dark:text-slate-300 font-mono ">
    <div class="grid grid-rows-6 divide-y-2 divide-black divide-solid"><div class="text-lg font-semibold">Digits</div><div>100</div><div>1000000</div><div>100000000</div></div>
    <div class="grid grid-rows-6"><div class="text-lg font-semibold">Time [s]</div><div>0.1</div><div>24</div><div>240</div></div>
</div>
</div> 
</div>