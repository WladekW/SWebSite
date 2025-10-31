<script>
  var { form, className } = $props();
</script>

<form method="post" class={className}>
  <label for="emailInput">
    Email adress*
    <input
      type="email"
      name="email"
      id="emailInput"
      placeholder="example@email.com"
    />
  </label>
  <label for="passwordInput">
    Password*
    <input
      type="password"
      name="password"
      id="passwordInput"
      placeholder="password"
    />
  </label>
  <button type="submit">Log In</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<style>
  form input,
  form button {
    border-radius: var(--std-radius);
    transition: 0.3s;
  }

  form {
    display: grid;
    gap: 16px;
  }

  form input {
    background-color: var(--gray-color);
  }

  form button {
    background-color: var(--orange-lighter-color);
    border: none;
  }

  label {
    display: grid;
    gap: 4px;
  }

  button:hover {
    background-color: var(--orange-color);
  }
</style>
