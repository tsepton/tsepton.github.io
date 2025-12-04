<script lang="ts">
	import { base } from '$app/paths';

	import { largeScreen } from '$lib/utils/windowSize';
</script>

<div class="main">
	<h1>Ph.D Complementary Resources</h1>

	<h2>Document</h2>
	<div style="">Will be uploaded when reviewed.</div>

	<h2>Repositories and reproduction packages</h2>
	<div style="">
		Most publications have associated open source repositories, this is the case for the
		<a href="https://github.com/tsepton/ummi" target="_blank" rel="noopener noreferrer"
			>Ummi development tool</a
		>
		(and its associated
		<a href="https://github.com/tsepton/ummi_usability" target="_blank" rel="noopener noreferrer"
			>reproduction package</a
		>), the
		<a href="https://github.com/tsepton/voice" target="_blank" rel="noopener noreferrer">VOICE</a>
		system, and the
		<a href="https://github.com/tsepton/ThighTouchI" target="_blank" rel="noopener noreferrer"
			>ThighTouchI</a
		> system.
	</div>

	<h2>Videos</h2>
	<div class="videos-container" class:larger={!$largeScreen}>
		<div class="video-item" class:larger={!$largeScreen}>
			<span class="video-title"> WiM prototype </span>
			<video controls>
				<source src={`${base}/videos/phd-demo-wim.webm`} type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>

		<div class="video-item" class:larger={!$largeScreen}>
			<span class="video-title">VOICE</span>
			<video controls>
				<source src={`${base}/videos/phd-demo-voice.webm`} type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>
		<div class="video-item" class:larger={!$largeScreen}>
			<span class="video-title"> ThighTouchI</span>
			<video controls>
				<source src={`${base}/videos/phd-demo-thightouchi.webm`} type="video/webm" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
</div>

<style>
	.main {
		overflow: hidden;
		padding-left: 1rem;
		padding-right: 1rem;
		height: 100%;
	}
	.videos-container.larger {
		display: flex;
		overflow-x: scroll;
	}
	.video-item {
		font-weight: 200;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75em;
		margin-bottom: 2em;
	}
	.video-item.larger {
		width: 25vw;
		margin-right: 1rem;
	}
	video {
		width: 100%;
		margin-top: 0.5rem;
	}
</style>
