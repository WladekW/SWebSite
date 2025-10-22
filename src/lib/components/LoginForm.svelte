<script>
    var {form, className} = $props();
</script>


<form method="POST" class="{className}">
    <label for="email">
        Email adress*
        <input type="email" name="email" id="emailInput" placeholder="example@email.com">
    </label>
    <label for="password">
        Password*
        <input type="password" name="password" id="passwordInput" placeholder="password">
    </label>
    <button type="submit">Log In</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<style>
    form input,
    form button {
        border: none;
        border-radius: var(--std-radius);
        padding: var(--std-space);
        transition: .3s;
    }

    form{
        display: grid;
        gap: 16px;
    }

    form input{
        background-color: var(--gray-color);
    }

    form button{
        background-color: var(--orange-lighter-color);
    }

    label{
        display: grid;
        gap: 16px;
    }

    button:hover{
        background-color: var(--orange-color);
    }
</style>