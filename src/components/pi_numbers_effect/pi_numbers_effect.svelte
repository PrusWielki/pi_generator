<script lang="ts">
	// TODO: Generate a bunch of numbers, map them, add transition fade with big delay or just modify opacity

	let x = Math.floor(Math.random() * 400);
	let y = Math.floor(Math.random() * 400);
</script>

<div id="pi_numbers_effect_container" class="fixed bottom-0 z-10 h-36 w-full bg-black">
	<div class={`number fixed z-10 text-white b-${x} l-${y}`} style="bottom: {x}px; left: {y}px ">
		1
	</div>
</div>
