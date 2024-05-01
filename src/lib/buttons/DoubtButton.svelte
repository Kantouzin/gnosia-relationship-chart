<script lang="ts">
  import { States, state } from '../../store';

  const handleClick = (): void => {
    $state = States.Doubt;
  };
</script>

<button on:click={handleClick} type="button" class="btn btn-danger">
  <i class="bi bi-hand-thumbs-down"></i>
</button>
