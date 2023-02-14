<script lang="ts">
    const getRandomInt=(min:number, max:number)=> {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
let pi_numbers= [3.14, 3.14159, 265, 3589, 23843];
let x_positions=[getRandomInt(0,1000)]
let y_positions=[]


</script>

<div>
    {#each pi_numbers as pi_number}
    <div class={`absolute text-xl  left-[${getRandomInt(0,1000)}px] top-[${getRandomInt(0,200)}px]`}>{pi_number}</div>
    {/each}
</div>