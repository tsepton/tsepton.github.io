<script lang="ts">
	import Lorem from '$lib/components/Lorem.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import { largeScreen } from '$lib/utils/windowSize';
	import { fly } from 'svelte/transition';

	const events: { description: string; date: Date; authors?: string }[] = [
		{
			date: new Date('5 June 2024 UTC'),
			authors: "Septon, T., Villarreal Narvaez, S., Devroey, X. & Dumas, B.",
			description:
				'Our paper titled "Exploiting Semantic Search and Object-Oriented Programming to Ease Multimodal Interface Development" was accepted at EICS 24\''
		},
		{
			date: new Date('21 August 2023 UTC'),
			authors: "Cauz, M., Septon, T. & Dumas, B.",
			description:
				'Our poster titled "Extending the World-in-Miniature Metaphor to Access Situated Information in a Pervasive Augmented Reality Environment" was accepted at ISMAR 23\''
		},
		{
			date: new Date('29 May 2023 UTC'),
			authors: "Cauz, M., Septon, T. & Dumas, B.",
			description:
				'Our LBR titled "Interaction Techniques to Control Information Clutter in a Pervasive Augmented Reality Scenario" was accepted at HCII 23\''
		},
		{
			date: new Date('28 March 2023 UTC'),
			description: 'Officially started my Ph.D under the supervision of Pr.Dumas'
		}
	];
</script>

<div class="container" class:larger={!$largeScreen}>
	<div class="presentation-container">
		<h1>About me</h1>
		<Lorem></Lorem>

		<h2>Interests</h2>
		<Lorem></Lorem>

		<h2>Education</h2>
		<Lorem></Lorem>
	</div>
	<div
		class="news-container"
		class:larger={!$largeScreen}
		in:fly={{ y: 50, duration: 200, delay: 600 }}
	>
		<h1>News</h1>
		<Timeline {events}></Timeline>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		gap: 2.5em;
		flex-wrap: wrap;
		height: 100%;
	}

	.container.larger {
		flex-wrap: nowrap;
	}

	.presentation-container {
		display: flex;
		flex-direction: column;
		text-align: justify;
		max-width: 50em;
	}

	h1 {
		font-size: 2em;
		font-weight: 300;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 300;
	}

	.news-container {
		position: relative;
		width: 100%;
		max-width: 100%;
		height: 100%;
		max-height: 100vh;
		box-sizing: border-box;
	}

	.news-container.larger {
		max-width: 28em;
		min-width: 25em;
	}
</style>
