<script lang="ts">
	import { base } from '$app/paths';
	import Timeline from '$lib/components/Timeline.svelte';
	import { largeScreen } from '$lib/utils/windowSize';
	import { fly } from 'svelte/transition';

	const events: { description: string; date: Date; authors?: string; repository?: string }[] = [
		{
			date: new Date('11 July 2025 UTC'),
			authors: 'Robin Ghyselinck, Thibaut Septon, Nicolas Geuens, Margaux Mannaerts, Julie Vijghen, Samy Lachkar, Benoît Frénay & Bruno Dumas',
			description:
				'Our paper titled "Computer Assisted Diagnosis: does it make sense for Lungs Tumor Detection? A Qualitative study with Pulmonologists" was accepted at IHM 25\''
		},
		{
			date: new Date('23 April 2025 UTC'),
			authors: 'Santiago Villarreal Narvaez, Thibaut Septon & Bruno Dumas',
			description:
				'Our LBR titled "Designing Touch-Based Gestures for Thigh-Worn Wearable Device in Passenger-Focused Vehicular XR Environments" was accepted at EICS 25\''
		},
		{
			date: new Date('10 March 2025 UTC'),
			authors: 'Maxime Cauz, Elise Hallaert, Thibaut Septon, Théo Leclercq & Bruno Dumas',
			description:
				'Our workshop proposal titled "Identifier et comprendre les enjeux de la Réalité Augmentée Permanente" was accepted at IHM 25\''
		},
		{
			date: new Date('31 January 2025 UTC'),
			authors: 'Thibaut Septon, Théo Leclercq, & Bruno Dumas',
			repository: 'https://github.com/tsepton/VOICE',
			description:
				'Our demo titled "Leveraging Pronoun Disambiguation in Multimodal Interaction for Contextual Understanding of Voice Assistant Queries" was accepted at IUI 25\''
		},
		{
			date: new Date('27 June 2024 UTC'),
			authors: 'Sacha Corbugy, Thibaut Septon, Bruno Dumas, Benoit Frénay',
			repository: 'https://github.com/sady410/tsne_interactive_explanation',
			description:
				'Our paper titled "Insight-SNE: Understanding t-SNE Embeddings through Interactive Explanation" was accepted at ESANN 24\''
		},
		{
			date: new Date('5 June 2024 UTC'),
			authors: 'Thibaut Septon, Santiago Villarreal Narvaez, Xavier Devroey & Bruno Dumas',
			repository: 'https://github.com/tsepton/ummi',
			description:
				'Our LBR titled "Exploiting Semantic Search and Object-Oriented Programming to Ease Multimodal Interface Development" was accepted at EICS 24\''
		},
		{
			date: new Date('21 August 2023 UTC'),
			authors: 'Thibaut Septon, Maxime Cauz & Bruno Dumas',
			description:
				'Our poster titled "Extending the World-in-Miniature Metaphor to Access Situated Information in a Pervasive Augmented Reality Environment" was accepted at ISMAR 23\''
		},
		{
			date: new Date('29 May 2023 UTC'),
			authors: 'Maxime Cauz, Thibaut Septon & Bruno Dumas',
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
	<div class="presentation-container" class:larger={!$largeScreen}>
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
					<li>Master in Computer Science, 2021</li>
					<li>Bachelor in Computer Science, 2020</li>
				</ul>
			</div>
		</div>

		<div class="side-note">
			Almost forgot, I also like <a href="{base}/photography">photography</a>.
		</div>
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
		gap: 10px;
		flex-wrap: wrap;
		height: 100%;
	}

	p {
		margin-bottom: 1em;
	}

	.container.larger {
		flex-wrap: nowrap;
		overflow: hidden !important;
		height: 100vh;
		max-height: 100vh;
		overflow: hidden;
	}

	.presentation-container {
		display: flex;
		flex-direction: column;
		text-align: justify;
		max-width: 50em;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.presentation-container.larger {
		max-height: 100vh;
		overflow-y: scroll;
		padding-bottom: 1rem;
	}

	.lists-container {
		display: flex;
		flex-direction: row;
		gap: 0.8em;
		padding: 0.8em;
	}
	.lists-container .list {
		flex: 1;
		width: fit-content;
		max-width: 100%;
	}

	h2 {
		padding-bottom: 0;
	}

	.news-container {
		position: relative;
		width: 100%;
		max-width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-left: 1rem;
		padding-right: 1rem;
	}

	.news-container.larger {
		max-width: 28em;
		min-width: 25em;
		max-height: 100vh;
		overflow-y: scroll;
		padding-top: 1rem;
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
