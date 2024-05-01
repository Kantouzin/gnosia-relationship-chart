<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = States.Defend;
  };
</script>

<button on:click={handleClick} type="button" class="btn btn-primary">
  <i class="bi bi-hand-thumbs-up"></i>
</button>
