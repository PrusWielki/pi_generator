<script lang="ts">
	import Input from '../input/input.svelte';
	import Output from '../output/output.svelte';
	let loading: Boolean;
	let pi: string;
	let table: string;
	$: fetch('http://localhost:5173/src/pi.txt')
		.then((response) => response.text())
		.then((data) => {
			loading;
			pi = data;
		});
	$: fetch('http://localhost:5173/src/table.txt')
		.then((response) => response.text())
		.then((data) => {
			loading;
			table = data;
		});
</script>

<div class="flex w-full flex-row items-start justify-center">
	<div class="w-1/2">
		<Input bind:loading />
	</div>
	{#if loading == true}
		<div class="w-1/2 animate-pulse text-center font-mono text-4xl font-bold">Generating pi...</div>
	{:else}
		<div class="w-1/2"><Output bind:pi bind:table /></div>
	{/if}
</div>
