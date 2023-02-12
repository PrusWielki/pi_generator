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
</script>

<div
	class="flex w-full flex-col  items-center justify-center overflow-x-hidden md:flex-row md:items-start"
>
	<div
		class={` flex w-1/2 justify-end ${ready ? '' : '-translate-x-full'} transition duration-1000`}
	>
		<Input bind:loading />
	</div>
	{#if loading == true}
		<div class="w-1/2 animate-pulse text-center font-mono text-4xl font-bold">Generating pi...</div>
	{:else}
		<div class={`w-1/2 items-start ${ready ? '' : 'translate-x-full'} transition duration-1000`}>
			<Output bind:pi bind:table />
		</div>
	{/if}
</div>
