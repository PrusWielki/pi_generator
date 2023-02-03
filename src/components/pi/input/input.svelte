<script lang="ts">
	let pi_numbers_to_generate: number;
	let pi_function_upper_range: number;
	let valid: Boolean = true;
	const validate = () => {
		if (!Number.isInteger(pi_numbers_to_generate) || !(pi_numbers_to_generate > 0)) {
			valid = false;
			return;
		}
		if (!Number.isInteger(pi_function_upper_range) || !(pi_function_upper_range > 0)) {
			valid = false;
			return;
		}
		valid = true;
		// TODO: If valid then exec
	};
</script>

<div class="flex w-1/2 flex-col">
	<div class="grid grid-cols-2 items-center gap-3 px-2 py-1">
		<div class="font-mono text-lg font-semibold">Number of digits to generate:</div>
		<input
			type="number"
			class="h-12 appearance-none border-2 border-black"
			bind:value={pi_numbers_to_generate}
		/>
	</div>
	<div class="grid grid-cols-2 items-center gap-3 px-2 py-1">
		<div class="font-mono text-lg font-semibold">Upper range of f_pi function arguments:</div>
		<input
			type="number"
			class="h-12 appearance-none border-2 border-black"
			bind:value={pi_function_upper_range}
		/>
	</div>
	<div class="w-full px-2">
		<button
			on:click={() => {
				validate();
			}}
			class="mt-10 w-full border-2 border-black py-4 transition duration-150 hover:bg-black hover:text-white hover:shadow-sm"
			>Generate</button
		>
	</div>
	{#if valid === false}
		<div class="w-full py-1 text-center font-mono text-lg font-semibold text-red-600">
			Provided values are not correct
		</div>
	{/if}
</div>
