<!-- Menu.svelte -->
<script>
    import { selectedDataset } from './stores/store.js';
    let datasets = ["dataset 1", "dataset 2", "dataset 3", "dataset 4"];
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">Choose a Dataset</h2>
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Select Data:</span>
            </div>
            <select class="select select-bordered" bind:value={$selectedDataset}>
                {#each datasets as dataset}
                    <option value="{dataset}">{dataset}</option>
                {/each}
            </select>
        </label>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Apply</button>
        </div>
    </div>
</div>

<style>
</style>