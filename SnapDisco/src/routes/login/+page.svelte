<script>

	import { enhance } from "$app/forms";

</script>
<body>
	<form method="POST" use:enhance>
		<label>
			Email
			<input name="email" type="email" placeholder="email" required/>
		</label>
		<br />
		<br />
		<label>
			Password
			<input name="password" type="password" placeholder="password" required />
		</label>
		<button>Log in</button>
	</form>
</body>

<style>
	body {
		background-color: rgba(247, 247, 14, 0.212);
	}

	form {
		text-align: center;
		font-size: 2vw;
	}

	button {
		color: rgb(0, 21, 80);
		background-color: aliceblue;
		border: dashed;
	}
</style>
