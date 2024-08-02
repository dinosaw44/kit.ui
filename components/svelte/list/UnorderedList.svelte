<script lang=ts generics="T">
    export let items: T[]
</script>

<ul style:display=contents style:list-decoration=none>
    {#each items as item, index}
        <li style:display=inherit>
            <slot {item} key={index}/>
        </li>
    {/each}
</ul>