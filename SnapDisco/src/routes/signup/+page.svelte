<script lang="ts">
	import { passwordMatchWarning } from './signup';
	import { enhance } from '$app/forms'

	export let newUsername = '';

	export let newUserEmail = '';

	export let password = '';

	let verifyPassword = '';

	

</script>

<h1>New Account</h1>

<form method="POST" use:enhance>
	<label>
		<p>Enter Username:</p>
		<input
			name="username"
			bind:value={newUsername}
			placeholder="username"
		/>
		<p>Enter Email:</p>
		<input
			name="email"
			bind:value={newUserEmail}
			placeholder="email"
			type="email"
			required
		/>
		<p>Enter Password:</p>
		<input
			name="password"
			bind:value={password}
			placeholder="password"
			type="password"
			required
			on:change={() => passwordMatchWarning(password, verifyPassword) }
		/>
		<p>Re-Enter Password:</p>
		<input
			name="password-verify"
			bind:value={verifyPassword}
			placeholder="password"
			type="password"
			required
			on:change={() => passwordMatchWarning(password, verifyPassword)}
		/>
		<p id="match-password" style="visibility: visible">The Passwords must match!</p>

		<br />
		<br />
		<input id="submission-button" type="submit" value="submit" />
	</label>
</form>
