<script lang="ts">
	import Input from '../input/input.svelte';
	import Output from '../output/output.svelte';
	let loading: Boolean;
	$: fetch('http://localhost:5173/src/pi.txt')
		.then((response) => response.text())
		.then((data) => {
			console.log(data);
		});
</script>

<div class="flex w-full flex-row items-center justify-center">
	<div class="w-1/2">
		<Input bind:loading />
	</div>
	{#if loading == true}
		<div class="w-1/2 animate-pulse text-center font-mono text-4xl font-bold">Generating pi...</div>
	{:else}
		<div class="w-1/2"><Output /></div>
	{/if}
</div>
