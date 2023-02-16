<script lang="ts">
	

	// Components
	import Header from '../components/header/header.svelte';
	import PiMainContainer from '../components/pi/pi_main_container/pi_main_container.svelte';
	import DarkModeButton from '../components/dark_mode_button/dark_mode_button.svelte';
	import Footer from '../components/footer/footer.svelte';
	// Content
	import { HEADER_TITLE, HEADER_DESCRIPTION } from '../content/header/header_content';
	// Assets

	// Stores
	import { theme } from '../stores/main_store';

	let subsTheme: string = 'dark';

	theme.subscribe(value => {
		subsTheme = value;
	});
	if(typeof document!=='undefined'){
	if(subsTheme==='dark')
document.documentElement.classList.add('dark')
            else
                document.documentElement.classList.remove('dark')}
            

</script>

<div class={`flex h-max min-h-screen w-full flex-col bg-cover transition-colors duration-700 ${subsTheme==='dark'?"bg-[url('bg-dark-new.svg')]":"bg-[url('bg-wave-light.svg')]"} container`} >
	<Header title={HEADER_TITLE} description={HEADER_DESCRIPTION} />
	<DarkModeButton/>
	<PiMainContainer />
</div>

<style>
	.container{
		background-image: url('bg-dark-new.svg');
	}
</style>