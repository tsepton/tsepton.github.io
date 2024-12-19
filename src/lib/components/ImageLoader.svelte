<script lang="ts">
	import Skeleton from './Skeleton.svelte';

	export let src: string | undefined;

	let loading = true;
</script>

<div class="container">
	<img {src} alt="thumbnail" loading="lazy" on:load={() => (loading = false)} />
	{#if loading}
		<div class="skeleton"></div>
	{/if}
</div>

<style>
	img {
		width: 100%;
		height: auto;
        z-index: 1;
	}

	.container {
		position: relative;
	}

	.skeleton {
		width: 100%;
		height: 100%;

		background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;

		top: 0;
		left: 0;
		position: absolute;
		z-index: 2;
	}

	@keyframes shimmer {
		from {
			background-position: -200% 0;
		}
		to {
			background-position: 200% 0;
		}
	}
</style>
