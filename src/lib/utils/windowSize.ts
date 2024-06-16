import { derived, writable } from 'svelte/store';

const windowSize = writable(0);

const smallScreen = derived(windowSize, ($windowSize) => $windowSize < 900);
const largeScreen = derived(windowSize, ($windowSize) => $windowSize < 1200);

export default windowSize;
export { largeScreen, smallScreen };
