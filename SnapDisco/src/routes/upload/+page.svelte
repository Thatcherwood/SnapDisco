<script lang="ts">
	import { browser } from '$app/environment';

	import HugeUploader from 'huge-uploader';

    let videoFile; //TODO make this type a video. idk how to do that tho

	if (browser) {
		// code will only run on the browser

		let fileObject = document.getElementById('input');

		const uploader = new HugeUploader({ endpoint: 'localhost/upload/', file: fileObject }); //TODO add unique file ID header for multi user stuff

		// subscribe to events
		uploader.on('error', (err) => {
			console.error('Something bad happened', err.detail);
		});

		uploader.on('progress', (progress) => {
			console.log(`The upload is at ${progress.detail}%`);
		});

		uploader.on('finish', (body) => {
			console.log('yeahhh - last response body:', body.detail);
		});

		// if you want to pause/resume the upload
		uploader.togglePause();
	}
</script>

<h1>upload here!</h1>

<p>Upload video</p>

<form method="POST">
	<label>
		Video
		<input type="file" bind:files={videoFile} />
	</label>
</form>

<style>
	input {
		color: rgb(0, 0, 0);
	}
</style>
