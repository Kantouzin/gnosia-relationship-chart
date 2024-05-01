<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = $state !== States.Doubt ? States.Doubt : States.Normal;
  };
</script>

<button
  on:click={handleClick}
  type="button"
  class="btn border border-danger border-3"
  class:btn-danger={$state === States.Doubt}
  class:btn-light={$state !== States.Doubt}
>
  <i class="bi bi-hand-thumbs-down"></i>
</button>
