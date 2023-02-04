<script lang="ts">
	export let pi: string;
	export let table: string;
</script>

<div class="flex flex-col justify-items-center  gap-5">
	<div class="px-2 py-2">
		<textarea disabled bind:value={pi} class="h-36 w-full self-start border-2 border-black" />
	</div>
	<div class="px-2 py-2">
		<textarea disabled bind:value={table} class="h-36 w-full self-end border-2 border-black" />
	</div>
</div>
