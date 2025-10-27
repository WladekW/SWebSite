<script>
    var {name, value} = $props(); 
</script>

<div>
    <span class="name">{name}</span>
    <span class="value">{value}</span>
</div>

<style>
    div{
        background-color: var(--gray-color);
        border-radius: var(--std-radius);
        padding: 16px;
        display: flex;
        justify-content: space-between;
    }
    .value{
        font-weight: bold;
    }
</style>