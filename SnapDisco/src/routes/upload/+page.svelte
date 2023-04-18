<script lang="ts">
	/*const handleFileUpload = async (event: SubmitEvent) => {
    console.log('submit')
  } */ // see https://www.okupter.com/blog/svelte-file-upload
</script>

<body>
	<form on:submit>
		<!-- |preventDefault={handleFileUpload}> -->
		<label for="file">Upload your video here.</label>
		<input type="file" id="file" name="file" accept=".mp4" required />
		<p>Only ".mp4" files are accepted.</p>
		<button class="btn" type="submit">Submit</button>
	</form>
</body>

<style>
	body {
		background-color: rgba(247, 247, 14, 0.212);
	}


	.btn {
		background-color: aliceblue;
		color: rgb(0, 21, 80);
		width: 10%;
		height: 5vw;
		font-size: 2vw;
		border: dashed;
	}
</style>
