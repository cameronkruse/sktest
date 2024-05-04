<script>
    import Logo from '$lib/Logo.svelte'
    let buttonName = "Button name generic";
    let drawerButtonName = "Open drawer";
    let titleName = "welcome to sveltekit";
    const updateTitle = () => {
        console.log("updateTitle");
        titleName = "welcome to the darkside";
        drawerButtonName = "Close drawer";
    };
</script>

<Logo />

<div class="index">
    <h1>{titleName}</h1>
    <h1 class="title"></h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <button on:click={updateTitle} class="btn btn-secondary" >{buttonName}</button>
    <br>
    <!-- add a daisy ui input field -->
    <input class="input input-bordered" type="text" bind:value={titleName} placeholder="Enter your name">
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button">{drawerButtonName}</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
</div>

<style>
    .index {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>
