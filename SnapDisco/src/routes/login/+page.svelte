<script>
	import { enhance } from '$app/forms';
</script>

<body>
	<form method="POST" use:enhance>
		<label>
			Email
			<input name="email" type="email" placeholder="email" required />
		</label>
		<br />
		<br />
		<label>
			Password
			<input name="password" type="password" placeholder="password" required />
		</label>
		<button id="btn">Log in</button>
	</form>
</body>

<style>
	form {
		text-align: center;
		font-size: 2vw;
	}
</style>
