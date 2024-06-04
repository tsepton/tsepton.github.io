<script lang="ts">
	import Lorem from '$lib/components/Lorem.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import { largeScreen } from '$lib/utils/windowSize';
	import { fly } from 'svelte/transition';

	const events: { description: string; date: Date; authors?: string }[] = [
		{
			date: new Date('5 June 2024 UTC'),
			authors: 'Septon, T., Villarreal Narvaez, S., Devroey, X. & Dumas, B.',
			description:
				'Our paper titled "Exploiting Semantic Search and Object-Oriented Programming to Ease Multimodal Interface Development" was accepted at EICS 24\''
		},
		{
			date: new Date('21 August 2023 UTC'),
			authors: 'Cauz, M., Septon, T. & Dumas, B.',
			description:
				'Our poster titled "Extending the World-in-Miniature Metaphor to Access Situated Information in a Pervasive Augmented Reality Environment" was accepted at ISMAR 23\''
		},
		{
			date: new Date('29 May 2023 UTC'),
			authors: 'Cauz, M., Septon, T. & Dumas, B.',
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

		<p>Hi! Welcome to this homepage.</p>

		<p>
			I am currently a Ph.D candidate at the University of Namur. My research interests are in the
			field of Human-Computer Interaction (HCI), more specifically in the design of multimodal
			interfaces for Mixed Reality applications (especially towards Augmented Reality). I am
			particularly interested in the design of interaction techniques that allow users to interact
			with their environment in a natural and intuitive way.
		</p>

		<p>
			Before starting a Ph.D, I worked as a software engineer. I am proficient within a few
			languages, and have experience working with both front-end and back-end web technologies. If
			you are interested to work with me on something exciting, feel free to contact me.
		</p>

		<div class="lists-container">
			<div class="list">
				<h2>Research Interests</h2>
				<ul>
					<li>Mixed Reality</li>
					<li>Augmented Reality</li>
					<li>Virtual Reality</li>
					<li>Multimodal Interaction</li>
				</ul>
			</div>

			<div class="list">
				<h2>Education</h2>
				<ul class="education-list">
					<li>Master in Computer Science, 2022</li>
					<li>Bachelor in Computer Science, 2020</li>
				</ul>
			</div>
		</div>

		<div class="side-note">Almost forget, I also like <a href="/photography">photography</a>.</div>
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

	p {
		margin-bottom: 1em;
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

	.lists-container {
		display: flex;
		flex-direction: row;
		gap: 0.8em;
		padding-top: 0.8em;
		flex-wrap: wrap;
	}

	.lists-container .list {
		flex: 1;
		min-width: fit-content;
	}

	h1 {
		font-size: 2em;
		font-weight: 300;
	}

	h2 {
		font-size: 1.5em;
		font-weight: 300;
		padding-bottom: 0;
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

	.side-note {
		font-size: smaller;
		padding-top: 1em;
	}

	.education-list > li::after {
		content: ' University of Namur, Belgium';
		display: block;
		font-size: smaller;
		padding-bottom: 0.5em;
	}
</style>
