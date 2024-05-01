<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = States.Vote;
  };
</script>

<button on:click={handleClick} type="button" class="btn btn-warning">
  <i class="bi bi-arrow-left-right"></i>
</button>
