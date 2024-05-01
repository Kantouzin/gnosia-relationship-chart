<script lang="ts">
  import { States, lineList, startNode, state, type State } from '../store';
  import type { Character } from '../types/character';
  import LeaderLine from 'leader-line-new';

  export let character: Character;
  export let angle: number, radius: number;

  const handleClick = (event: Event): void => {
    if (event.target === null) {
      return;
    }

    let color: string;
    switch ($state) {
      case States.Defend:
        color = 'blue';
        break;
      case States.Doubt:
        color = 'red';
        break;
      case States.Vote:
        color = 'orange';
        break;
      default:
        return;
    }

    if ($startNode) {
      $lineList.push(
        new LeaderLine($startNode, event.target, { color: color }),
      );
      $startNode = null;
    } else {
      $startNode = event.target;
    }
  };
</script>

<button
  on:click={handleClick}
  type="button"
  class="btn btn-light position-absolute"
  style="background-color: {character.color}; transform: rotate({angle}deg) translate(0, -{radius}px) rotate(-{angle}deg);"
>
  <span class="fw-bold text-light">{character.name}</span>
</button>
