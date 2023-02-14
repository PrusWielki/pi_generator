<script>
	export let title = 'Title goes here';
	export let description = 'Description goes here';
</script>

<div class="flex w-full cursor-default flex-col items-center justify-center text-center font-mono">
	<div class="mt-4 max-w-lg  px-4">
		<div class="text-xl font-bold sm:text-2xl md:text-4xl dark:text-slate-300">{title}</div>
		<div class="mt-8 text-sm leading-loose sm:text-lg dark:text-slate-300">
			{description}
		</div>
	</div>
</div>
