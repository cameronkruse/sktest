<script>
    export let title = "Llama Demo"
</script>

<div class="title">
    <img src="/llama.svg" alt="site logo">
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
        align-items: center;
    }

    .title img {
        display: inline-block;
        width: 50px;
        height: 50px;
    }
    .title h1 {
        margin-left: 10px;
    }
</style>