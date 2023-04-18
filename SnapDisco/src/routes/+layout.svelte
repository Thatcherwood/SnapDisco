<nav>
	<div style="text-align:center">
	<a class="btn" href="/">Home</a>
	<a class="btn" href="/login">Login</a>
	<a class="btn" href="/account">Account</a>
	<a class="btn" href="/signup">Signup</a>
	</div>
</nav>

<slot />

<style>
	.btn {
		background-color: rgba(247, 247, 14, 0.212);
		color: rgb(0, 21, 80);
		border-style: solid;
		font-size: 4vw;
		margin: 10px;
		padding: 10px;
		display: inline-block;
		text-decoration: none;
	}
</style>