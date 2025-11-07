<script>
  var { form, className } = $props();
</script>

<form method="post" class={className}>
  <label for="nameInput">
    <input type="text" name="name" id="nameInput" placeholder="name" />
  </label>
  <label for="emailInput">
    <input
      type="email"
      name="email"
      id="emailInput"
      placeholder="example@email.com"
    />
  </label>
  <label for="messageInput">
    <textarea
      type="text"
      name="email"
      id="messageInput"
      placeholder="Hello! ... "
    ></textarea>
  </label>
  <button type="submit">Log In</button>
</form>

{#if form?.error}
  <p style="color: red;">{form.error}</p>
{/if}

<style>
  form input,
  form button,
  form textarea {
    border-radius: var(--std-radius);
    transition: 0.3s;
  }

  form {
    display: grid;
    gap: 16px;
  }

  form input,
  form textarea {
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

  #messageInput {
    height: 200px;
    resize: vertical;
    max-height: 500px;
  }

  button:hover {
    background-color: var(--orange-color);
  }
</style>
