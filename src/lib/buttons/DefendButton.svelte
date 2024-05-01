<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = $state !== States.Defend ? States.Defend : States.Normal;
  };
</script>

<button
  on:click={handleClick}
  type="button"
  class="btn border border-primary border-3"
  class:btn-primary={$state === States.Defend}
  class:btn-light={$state !== States.Defend}
>
  <i class="bi bi-hand-thumbs-up"></i>
</button>
