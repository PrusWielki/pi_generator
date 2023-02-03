<script lang="ts">
	import Input from '../input/input.svelte';
	let loading: Boolean;
</script>

<div class="flex w-full flex-row items-center justify-center transition duration-500">
	<Input bind:loading />
	{#if loading == true}
		<div class="w-1/2 animate-pulse text-center font-mono text-4xl font-bold">Generating pi...</div>
	{/if}
</div>
