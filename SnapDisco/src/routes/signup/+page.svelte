<script lang="ts">
	import { passwordVerification } from './signup';
	import { enhance } from '$app/forms';
	import PasswordNotification from '$lib/components/+PasswordNotification.svelte';

	export let newUsername = '';

	export let newUserEmail = '';

	export let password = '';

	let verifyPassword = '';
</script>

<body>
	<h1>New Account</h1>
	<form method="POST" use:enhance>
		<label>
			Enter Username:
			<input name="username" bind:value={newUsername} placeholder="username" />
		</label>
		<br />
		<label>
			Enter Email:
			<input name="email" bind:value={newUserEmail} placeholder="email" type="email" required />
		</label>
		<br />
		<label>
			Enter Password:
			<input
				name="password"
				bind:value={password}
				placeholder="password"
				type="password"
				required
				on:change={() => passwordVerification(password, verifyPassword)}
			/>
		</label>
		<br />
		<label>
			Re-Enter Password:
			<input
				name="password-verify"
				bind:value={verifyPassword}
				placeholder="password"
				type="password"
				required
				on:change={() => passwordVerification(password, verifyPassword)}
			/>
		</label>

		<PasswordNotification></PasswordNotification>

		<input id="btn" type="submit" value="submit" disabled />
	</form>
</body>

<style>
	form {
		text-align: center;
		font-size: 2vw;
	}


</style>
