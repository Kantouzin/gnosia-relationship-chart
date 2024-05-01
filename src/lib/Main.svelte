<script lang="ts">
  import ClearButton from './buttons/ClearButton.svelte';
  import DefendButton from './buttons/DefendButton.svelte';
  import DoubtButton from './buttons/DoubtButton.svelte';
  import RelationshipChart from './RelationshipChart.svelte';
  import VoteButton from './buttons/VoteButton.svelte';
</script>

<main class="container d-flex flex-column align-items-center mt-5">
  <div class="bg-secondary bg-opacity-25 rounded-pill px-5 py-3">
    <DefendButton />
    <DoubtButton />
    <VoteButton />
    <ClearButton />
  </div>
  <RelationshipChart />
</main>
