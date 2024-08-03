<script lang=ts>
    export let label: string
    export let color: number | string = "white"

    $: base = typeof color === 'string' ? color : `hsl(${color}, 100, 50)`
</script>

<style lang=scss>
    span {
        border: solid .05em;
        border-radius: 1em;
        display: inline-block;
        isolation: isolate;
        overflow: hidden;
        padding: 0 .5em;
        position: relative;
        text-wrap: nowrap;
        width: fit-content;
        
        &::before {
            content: "\00A0";
            background-color: black;
            opacity: .75;
            position: absolute;
            left: 0;
            width: 100%;
            z-index: -1;
        }
    }
</style>

<span style:background-color={base} style:border-color={base}>{label}</span>