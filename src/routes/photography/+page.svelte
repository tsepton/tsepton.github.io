<script lang="ts">
	import ParallaxScroll from '$lib/components/ParallaxScroll.svelte';

	const imageModules: Record<string, { default: string }> = import.meta.glob('/src/lib/photo/*', {
		eager: true
	});
	const data: string[] = Object.entries(imageModules).flatMap((x) => x[0]);
</script>

<h1>Photography</h1>

<ParallaxScroll images={data} />
