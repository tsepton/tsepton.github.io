import { derived, writable } from 'svelte/store';

const windowSize = writable(1000);

const smallScreen = derived(windowSize, ($windowSize) => $windowSize < 768);

export default windowSize;
export { smallScreen };
