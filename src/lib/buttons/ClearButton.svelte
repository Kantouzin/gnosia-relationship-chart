<script lang="ts">
  import { lineList } from '../../store';

  const handleClick = (): void => {
    $lineList.forEach((line) => line.remove());
    $lineList.length = 0;
  };
</script>

<button type="button" on:click={handleClick} class="btn btn-light">
  <i class="bi bi-trash"></i>
</button>
