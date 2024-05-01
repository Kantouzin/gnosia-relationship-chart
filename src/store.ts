import type LeaderLine from 'leader-line-new';
import { writable, type Writable } from 'svelte/store';

export const States = {
  Normal: 1,
  Doubt: 2,
  Defend: 3,
  Vote: 4
} as const;
export type State = typeof States[keyof typeof States];

export const state: Writable<State> = writable(States.Normal);
export const startNode: Writable<EventTarget | null> = writable(null);
export const lineList: Writable<LeaderLine[]> = writable([]);
