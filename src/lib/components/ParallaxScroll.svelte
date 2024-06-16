<script lang="ts">
	import { base } from '$app/paths';
	import { smallScreen } from '$lib/utils/windowSize';
	import { useViewportScroll, useTransform, Motion } from 'svelte-motion';

	export let images: string[];
	export let className: string | undefined = undefined;

	const { scrollYProgress } = useViewportScroll();

	// FIXME: smallscreen will have an overlap
	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 0]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const translateThird = useTransform(scrollYProgress, [0, 1], [0, -100]);

	const third = Math.ceil(images.length / 3);

	const firstPart = images.slice(0, third);
	const secondPart = images.slice(third, 2 * third);
	const thirdPart = images.slice(2 * third);
</script>

<div class="{className} gallery {$smallScreen ? 'reduced' : ''}">
	<div class="column">
		{#each firstPart as el}
			<Motion let:motion style={{ y: translateFirst }}>
				<div use:motion>
					<img src={`${base}${el}`} alt="thumbnail" />
				</div>
			</Motion>
		{/each}
	</div>
	<div class="column">
		{#each secondPart as el}
			<Motion let:motion style={{ y: translateSecond }}>
				<div use:motion>
					<img src={`${base}${el}`} alt="thumbnail" />
				</div>
			</Motion>
		{/each}
	</div>
	<div class="column">
		{#each thirdPart as el}
			<Motion let:motion style={{ y: translateThird }}>
				<div use:motion>
					<img src={`${base}${el}`} alt="thumbnail" />
				</div>
			</Motion>
		{/each}
	</div>
</div>

<style>
	.gallery {
		display: flex;
		flex-wrap: nowrap;
		justify-content: start;
	}

	.column {
		display: flex;
		flex-direction: column;
		margin: 1em;
		width: 100%;
	}

	img {
		width: 100%;
		height: auto;
	}

	.reduced {
		flex-wrap: wrap !important;
	}
</style>
