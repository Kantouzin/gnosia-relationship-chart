<script lang="ts">
  import type { Character } from '../types/character';

  export let character: Character;
  export let angle: number, radius: number;
</script>

<button
  type="button"
  class="btn btn-light position-absolute"
  style="background-color: {character.color}; transform: rotate({angle}deg) translate(0, -{radius}px) rotate(-{angle}deg);"
>
  <span class="fw-bold text-light">{character.name}</span>
</button>
