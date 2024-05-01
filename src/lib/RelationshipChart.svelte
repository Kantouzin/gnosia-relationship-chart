<script lang="ts">
  import type { Character } from '../types/character';
  import CharacterNode from './CharacterNode.svelte';

  const radius: number = 300;
  let angle: number = 0;

  const fetchCharacters = async (): Promise<Character[]> => {
    const response: Response = await fetch('/json/characters.json');
    const json: Character[] = await response.json();
    angle = 360 / json.length;
    return json;
  };
</script>

<div
  class="border border-5 rounded-circle d-flex justify-content-center align-items-center my-5"
  style="width: {radius * 2}px; aspect-ratio: 1 / 1;"
>
  {#await fetchCharacters()}
    <p>Now Loading ...</p>
  {:then characters}
    {#each characters as character, index}
      <CharacterNode {character} angle={angle * index} {radius} />
    {/each}
  {/await}
</div>
