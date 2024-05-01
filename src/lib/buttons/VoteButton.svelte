<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = $state !== States.Vote ? States.Vote : States.Normal;
  };
</script>

<button
  on:click={handleClick}
  type="button"
  class="btn border border-warning border-3"
  class:btn-warning={$state === States.Vote}
  class:btn-light={$state !== States.Vote}
>
  <i class="bi bi-arrow-left-right"></i>
</button>
