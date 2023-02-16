<script lang="ts">
	import Input from '../input/input.svelte';
	import Output from '../output/output.svelte';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	let loading: boolean;
	let pi: string;
	let table: string;
	$: if (typeof window !== 'undefined')
		fetch(`${window.location.href}src/pi.txt`)
			.then((response) => (response.ok ? response.text() : ''))
			.then((data) => {
				loading;
				pi = data;
			})
			.catch(() => {
				pi = '';
			});
	$: if (typeof window !== 'undefined')
		fetch(`${window.location.href}src/table.txt`)
			.then((response) => (response.ok ? response.text() : ''))
			.then((data) => {
				loading;
				table = data;
			})
			.catch(() => {
				table = '';
			});
	let currentTime:number=0;
	let interval:NodeJS.Timer;
	const startInterval = ()=>{currentTime = 0;
		interval = setInterval(function() {
    currentTime++;
	console.log(currentTime)
 }, 1000);}
 const endInterval = ()=>{clearInterval(interval);}

	$: if(loading) {
		startInterval();
	}
	else{
		endInterval();
	}
</script>

<div class="flex flex-col">
<div
	class="mt-8 flex w-full  flex-col items-center justify-center overflow-x-hidden md:flex-row md:items-start"
>
	<div
		class={` flex sm:w-1/2 justify-end ${ready ? '' : '-translate-x-full'} transition duration-1000`}
	>
		<Input bind:loading />
	</div>
	{#if loading == true}
		<div class="sm:w-1/2 animate-pulse flex flex-col gap-12 items-center dark:sm:text-slate-300 dark:text-stone-900 justify-center h-72 text-center font-mono text-4xl font-bold"><div></div>Generating pi...<div>{currentTime}</div></div>
	{:else}
		<div class={`sm:w-1/2 items-start ${ready ? '' : 'translate-x-full'} transition duration-1000`}>
			<Output bind:pi bind:table />
		</div>
	{/if}

</div>
	{#if currentTime>0&&loading==false}
	<div class="text-center sm:text-2xl font-mono font-semibold text-white dark:text-cyan-500 mt-2 sm:mt-12">Last Execution Time: {currentTime} s</div>
	{/if}
</div>
