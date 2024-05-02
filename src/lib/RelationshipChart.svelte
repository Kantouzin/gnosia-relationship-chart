<script lang="ts">
  import type { Character } from '../types/character';
  import CharacterNode from './CharacterNode.svelte';

  let diameter: number = 0;
  let angle: number = 0;

  const fetchCharacters = async (): Promise<Character[]> => {
    const response: Response = await fetch(
      import.meta.env.VITE_BASE_URL + '/json/characters.json',
    );
    const json: Character[] = await response.json();
    angle = 360 / json.length;
    return json;
  };
</script>

<div
  bind:offsetWidth={diameter}
  class="chart border border-5 rounded-circle d-flex justify-content-center align-items-center my-5"
>
  {#await fetchCharacters()}
    <p>Now Loading ...</p>
  {:then characters}
    {#each characters as character, index}
      <CharacterNode
        {character}
        angle={angle * index}
        radius={diameter * 0.5}
      />
    {/each}
  {/await}
</div>

<style>
  .chart {
    aspect-ratio: 1 / 1;
    width: 85%;
  }

  @media (min-width: 768px) {
    .chart {
      width: 50%;
    }
  }
</style>
