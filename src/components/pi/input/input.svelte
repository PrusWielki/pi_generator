<script lang="ts">
	let pi_numbers_to_generate: number;
	let pi_function_upper_range: number;
	let valid: boolean = true;
	export let loading: boolean = false;
	const validate = () => {
		if (!Number.isInteger(pi_numbers_to_generate) || !(pi_numbers_to_generate >= 0)) {
			valid = false;
			return;
		}
		if (!Number.isInteger(pi_function_upper_range) || !(pi_function_upper_range >= 0)) {
			valid = false;
			return;
		}
		valid = true;
		fetchPI();
	};

	async function fetchPI(): Promise<void> {
		loading = true;
		const response = await fetch(
			`/pi?n=${pi_numbers_to_generate}&upper=${pi_function_upper_range}`
		);
		loading = false;
	}
</script>

<div class="flex w-full max-w-xl flex-col">
	<div class="flex flex-row items-center gap-3 px-2 py-1">
		<div class="w-3/4 cursor-default font-mono text-base font-semibold md:text-lg">
			Number of digits to generate:
		</div>
		<input
			type="number"
			class="h-12 w-1/4 appearance-none rounded-md border-2 border-black text-center font-mono font-semibold hover:shadow-md"
			bind:value={pi_numbers_to_generate}
		/>
	</div>
	<div class="flex flex-row items-center gap-3  px-2 py-1">
		<div class="w-3/4 cursor-default font-mono text-base font-semibold md:text-lg">
			Upper range of f_pi function arguments:
		</div>
		<input
			type="number"
			class="h-12 w-1/4 appearance-none rounded-md border-2 border-black text-center font-mono font-semibold hover:shadow-md"
			bind:value={pi_function_upper_range}
		/>
	</div>
	<div class="w-full px-2">
		<button
			on:click={() => {
				validate();
			}}
			disabled={loading}
			class="mt-10 w-full rounded-md border-2 border-black py-4 font-mono transition duration-500 hover:bg-black hover:text-white hover:shadow-md"
			>Generate</button
		>
	</div>
	{#if valid === false}
		<div class="w-full py-1 text-center font-mono text-base font-semibold text-red-600 md:text-lg">
			Provided values are not correct
		</div>
	{/if}
</div>
