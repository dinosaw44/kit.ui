<script lang=ts>
    export let label: string
    export let color: number | string = "var(--color-accent)"

    $: base = typeof color === 'string' ? color : `hsl(${color}, 100, 50)`
</script>

<style lang=scss>
    span {
        border: solid .05em;
        border-radius: 1em;
        display: inline-block;
        width: fit-content;
        padding: 0 .5em;
        text-wrap: nowrap;
    }
</style>

<span style:border-color={base}>{label}</span>