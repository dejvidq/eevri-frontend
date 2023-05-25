import { writable } from 'svelte/store';

function createTitle() {
  const { subscribe, set, update } = writable('');

  return {
    subscribe,
    set: (value) => {
      set(`${value} • WebSite`)
    },
    clear: () => {
      set('Website • Home suffix');
    }
  }
}

export const title = createTitle();
