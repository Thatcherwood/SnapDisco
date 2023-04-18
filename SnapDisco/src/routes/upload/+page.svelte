<script lang="ts">
  /*const handleFileUpload = async (event: SubmitEvent) => {
    console.log('submit')
  } */ // see https://www.okupter.com/blog/svelte-file-upload
</script>


<form on:submit> <!-- |preventDefault={handleFileUpload}> -->
	<label for="file">Upload your video here.</label>
	<input type="file" id="file" name="file" accept=".mp4" required />
	<button class="btn" type="submit">Submit</button>
</form>
<p>Only ".mp4" files are accepted.</p>

<style>

    .btn {

        background-color: aliceblue;

    }
</style>