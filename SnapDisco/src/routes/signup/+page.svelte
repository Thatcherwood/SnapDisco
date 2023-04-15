<script lang="ts">
	import { onMount } from 'svelte';
	import { showPasswordWarn } from './+page.ts'

	export let newUsername = '';

	export let newUserEmail = '';

	export let password = '';

	let verifyPassword = '';

	onMount(() => {
		let verifyPassword1 = document.getElementsByName('password');
		let verifyPassword2 = document.getElementsByName('password-verify');
		let passwordMatch = false;

		showPasswordWarn();

		if (verifyPassword1 === verifyPassword2) {
			passwordMatch = true; //TODO read this value on submit!
			console.log('they match');
		}
	});
</script>

<h1>New Account</h1>

<form method="POST">
	<style>

		#match-password {
			visibility: hidden;
		}

	</style>
	<label>
		<p>Enter Username:</p>
		<input name="username" bind:value={newUsername} placeholder="username" />

		<p>Enter Email:</p>
		<input name="email" bind:value={newUserEmail} placeholder="email" type="email" required />

		<p>Enter Password:</p>
		<input name="password" bind:value={password} placeholder="password" type="password" required />

		<div id="password-location" />

		<p>Re-Enter Password:</p>
		<input
			name="password-verify"
			bind:value={verifyPassword}
			placeholder="password"
			type="password"
			required
		/>
		<p id="match-password">The Passwords must match!</p>

		<br />
		<br />
		<input type="submit" value="submit" />
	</label>
</form>
