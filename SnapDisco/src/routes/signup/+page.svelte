<script lang="ts">
	export let newUsername = '';

	export let newUserEmail = '';

	export let password = '';

    let verifyPassword1 = document.getElementsByName("password")
    let verifyPassword2 = document.getElementsByName("password-verify")
    let passwordMatch = false

    if (verifyPassword1 === verifyPassword2) {
        passwordMatch = true; //TODO read this value on submit!
    }

</script>

<h1>New Account</h1>

<form method="POST">
	<label>
		<p>Enter Username:</p>
		<input name="username" bind:value={newUsername} placeholder="username" />

		<p>Enter Email:</p>
		<input name="email" bind:value={newUserEmail} placeholder="email" type="email" required />

		<p>Enter Password:</p>
		<input name="password" bind:value={password} placeholder="password" type="password" required />

        <p>Re-Enter Password:</p>
		<input name="password-verify" bind:value={password} placeholder="password" type="password" required />


		<br />
		<br />
		<input type="submit" value="submit" />
	</label>
</form>
