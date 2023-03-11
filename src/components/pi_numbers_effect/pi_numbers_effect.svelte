<script lang="ts">
	// TODO: Generate a bunch of numbers, map them, add transition fade with big delay or just modify opacity
	let numbers:number[]=[3.141,3,1415,59265,5,14,26,358,89,23,238,846]
	let innerWidth:number=400;
	let x:number[]=[0];
	let y:number[]=[0];
	let opacity:number= 100;
	setInterval(()=>{
		for(let i:number=0;i<numbers.length;i++){
		 x[i] = Math.floor(Math.random() * innerWidth);
		 y[i] = Math.floor(Math.random() * 144);
		}

		if(opacity===100)
	opacity=0;
else
opacity=100;},2000) 
	
	$: console.log(opacity);
</script>

<svelte:window bind:innerWidth />

<div id="pi_numbers_effect">
	{#each numbers as number,i}
	<div class={`number fixed z-10 transition-all duration-700 text-slate-300`} style="top: {y[i]}px; left: {x[i]}px; opacity: {opacity}% ">
		{number}
	</div>
	{/each}
</div>
