<script lang="ts">
	import { base } from '$app/paths';
	import ParallaxScroll from '$lib/components/ParallaxScroll.svelte';
	import { largeScreen } from '$lib/utils/windowSize';

	const imageModules: Record<string, () => Promise<any>> = import.meta.glob('/src/photo/*');
	const data: Promise<string[]> = Promise.all(
		Object.keys(imageModules).map((modulePath) => imageModules[modulePath]().then((x) => x.default))
	);
</script>

<div class="photo-container" class:larger={!$largeScreen}>
	<h1>Photography</h1>
	
	{#await data then data}
	<ParallaxScroll images={data} />
	{:catch error}
	<p style="color: red">{error.message}</p>
	{/await}
</div>

<style>
	.photo-container {
		height: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		overflow: hidden;
	}
	/* .photo-container.larger {
		flex-wrap: nowrap;
		overflow: hidden !important;
		height: 100vh;
		max-height: 100vh;
		overflow: hidden;
	} */
</style>