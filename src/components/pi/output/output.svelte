<script lang="ts">
	export let pi: string;
	export let table: string;
</script>

<div class="flex max-w-xl flex-col justify-items-center gap-5">
	<div class="px-2 py-1">
		<textarea
			disabled
			bind:value={pi}
			class="h-36 w-full self-start rounded-md border-2 border-black hover:shadow-md dark:border-slate-300 dark:text-slate-300 dark:bg-zinc-700 bg-white"
		/>
	</div>
	<div class="px-2 py-1">
		<textarea
			disabled
			bind:value={table}
			class="h-36 w-full self-end rounded-md border-2 border-black hover:shadow-md dark:border-slate-300 dark:text-slate-300 dark:bg-zinc-700 bg-white"
		/>
	</div>
</div>
