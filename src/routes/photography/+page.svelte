<script lang="ts">
	import { base } from '$app/paths';
	import ParallaxScroll from '$lib/components/ParallaxScroll.svelte';

	let data: string[] = [];

	const imageModules: Record<string, () => Promise<any>> = import.meta.glob('/static/photo/*');

	Promise.all(
		Object.keys(imageModules).map((modulePath) =>
			imageModules[modulePath]().then(({ default: imageUrl }) => imageUrl.replace('/static', ''))
		)
	).then((imageUrls) => {
		data = imageUrls;
	});
</script>

<h1>Photography</h1>

{#if data.length >= 2}
	<ParallaxScroll images={data} />
{/if}
