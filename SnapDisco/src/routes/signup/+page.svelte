<script lang="ts">
	import { passwordMatchWarning } from './signup';
	import { enhance } from '$app/forms';

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
				on:change={() => passwordMatchWarning(password, verifyPassword)}
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
				on:change={() => passwordMatchWarning(password, verifyPassword)}
			/>
			</label>
			<p id="match-password">The Passwords must match!</p>

			<input id="submission-button" type="submit" value="submit" />
	</form>
</body>

<style>
	body {
		background-color: rgba(247, 247, 14, 0.212);
	}

	h1 {
		color: rgb(0, 21, 80);
		text-align: center;
		font-size: 3vw;
	}

	p {
		color: rgb(0, 21, 80);
		font-size: 2vw;
	}

	form {
		text-align: center;
		font-size: 2vw;
	}

	#match-password {
		visibility: visible;
		color: red;
		font-size: 1.5vw;
	}

	#submission-button {
		color: rgb(0, 21, 80);
		background-color: aliceblue;
		width: 10%;
		height: 5vw;
		font-size: 2vw;
		border: dashed;
	}
</style>
