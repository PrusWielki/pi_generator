<script lang="ts">
	let pi_numbers_to_generate: number;
</script>

<div class="flex flex-row">
	<div class="grid grid-cols-2 gap-3 px-2 py-1">
		<div class="font-mono text-lg font-semibold">Number of digits to generate:</div>
		<input
			type="number"
			class="appearance-none border-2 border-black"
			bind:value={pi_numbers_to_generate}
		/>
	</div>
</div>
