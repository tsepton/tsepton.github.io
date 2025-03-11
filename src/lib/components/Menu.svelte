<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { smallScreen, largeScreen } from '$lib/utils/windowSize';
	import { onMount } from 'svelte';

	let menuOffset: number = 0;
	let pictureOffset: number = 0;
	let pictureSize: string = '8em';
	let opacity: string = '0';

	onMount(() => {
		const callback = () => {
			if (!$smallScreen) {
				menuOffset = 0;
				pictureOffset = 0;
				pictureSize = '8em';
				opacity = '0';
			} else {
				menuOffset = $smallScreen ? Math.max(0, window.scrollY - 300) : 0;
				pictureOffset = $smallScreen ? Math.min(270, window.scrollY) : 0;
				pictureSize = `${Math.max(6, 8 - window.scrollY / 100)}em`;
				opacity = `${Math.min(0.5, window.scrollY / 600)}`;
			}
		};
		window.addEventListener('scroll', callback);
		return () => window.removeEventListener('scroll', callback);
	});
</script>

<div
	class="menu"
	class:menu-reduced={$smallScreen}
	style="transform: translate(0, {menuOffset}px); filter: drop-shadow(0 0 2px rgba(0, 0, 0, {opacity}));"
>
	<div class="profile-pic" class:reduced={$smallScreen}>
		<div
			class="picture-container"
			style="transform: translate(0, {pictureOffset}px); width: {pictureSize}; height: {pictureSize}; filter: drop-shadow(0 0 2px rgba(0, 0, 0, {opacity}));"
		>
			<img src="{base}/me.jpg" alt="Thibaut" />
		</div>
		<p class="name">Thibaut Septon</p>
		<p class="about-me">Ph.D Candidate @ UNamur</p>
		<p class="mail">thibaut.septon@unamur.be</p>
		<div class="contact-logo-containers">
			<a href="https://github.com/tsepton/" target="_blank">
				<img class="logo" src="{base}/github.svg" alt="github logo" />
			</a>
			<a href="https://gitlab.com/tsepton" target="_blank">
				<img class="logo" src="{base}/gitlab.svg" alt="gitlab logo" />
			</a>
			<a href="https://www.linkedin.com/in/thibaut-septon-b425041a2/" target="_blank">
				<img class="logo" src="{base}/linkedin.svg" alt="linkedin logo" />
			</a>
		</div>
	</div>

	<div class:reduced={$smallScreen}>
		<div class="menu-item" class:reduced={$smallScreen}>
			<a class:active={$page.url.pathname === `${base}/`} href="{base}/">Research</a>
		</div>
		<div class="menu-item" class:reduced={$smallScreen}>
			<a class:active={$page.url.pathname === `${base}/photography`} href="{base}/photography">
				Photography
			</a>
		</div>
	</div>

	{#if !$smallScreen}
		<div class="easter-eggs">
			<a href="https://tsepton.github.io/life" target="_blank">
				<img class="logo easter-egg-logo" src="{base}/life.svg" alt="Conway's game of life" />
			</a>
		</div>
	{/if}
</div>

<style>
	.menu {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 18.5em;
		height: 100%;
		box-sizing: border-box;
		padding: 1em;
		background-color: #f0f0f0;
		z-index: 100;
	}

	.menu-reduced {
		width: 100%;
		height: fit-content;
		background-color: #f0f0f0;
	}

	.profile-pic > .name {
		font-size: 1.1em;
		font-weight: 500;
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.profile-pic > .about-me {
		font-size: 0.8em;
		font-weight: 300;
		margin-bottom: 0.3em;
	}

	.profile-pic > .mail {
		font-size: 0.8em;
		font-weight: 300;
		margin-top: 0;
		padding-top: 0;
	}

	.reduced {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.menu-item {
		padding: 10px;
		border-bottom: 1px solid #e0e0e0;
		text-align: right;
	}
	.menu-item a {
		text-decoration: none;
		color: #000;
		transition: all 0.2s linear;
	}

	.menu-item a:hover {
		color: #0070f3;
	}

	.active {
		color: #0070f3 !important;
	}

	.menu-item:last-child {
		border-bottom: none;
	}

	.menu-item.reduced {
		border-bottom: none !important;
	}

	.profile-pic {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
		padding: 2em;
	}

	.profile-pic.reduced {
		border-bottom: none;
	}

	.picture-container {
		border-radius: 50%;
		overflow: hidden;
	}

	.picture-container > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.contact-logo-containers {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
		max-width: 8em;
		margin-top: 0.8em;
	}

	.contact-logo-containers > a > .logo {
		width: 1.5em;
		height: 1.5em;
		margin-right: 0.5em;
	}

	.easter-eggs {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: end;
	}

	.easter-egg-logo {
		width: 1em !important;
		height: 1em !important;
		opacity: 0.3;
	}
</style>
