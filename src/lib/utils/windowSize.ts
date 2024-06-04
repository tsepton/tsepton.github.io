import { derived, writable } from 'svelte/store';

const windowSize = writable(1000);

const smallScreen = derived(windowSize, ($windowSize) => $windowSize < 768);
const largeScreen = derived(windowSize, ($windowSize) => $windowSize < 1200);

export default windowSize;
export { smallScreen, largeScreen };
