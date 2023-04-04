<script>

import HugeUploader from 'huge-uploader';

let fileObject = document.getElementById("input");

const uploader = new HugeUploader({ endpoint: 'localhost/upload/', file: fileObject, headers: 'uploader-file-id' })

// subscribe to events
uploader.on('error', (/** @type {{ detail: any; }} */ err) => {
    console.error('Something bad happened', err.detail);
});

uploader.on('progress', (/** @type {{ detail: any; }} */ progress) => {
    console.log(`The upload is at ${progress.detail}%`);
});

uploader.on('finish', (/** @type {{ detail: any; }} */ body) => {
    console.log('yeahhh - last response body:', body.detail);
});

// if you want to pause/resume the upload
uploader.togglePause();

</script>

<h1>upload here!</h1>

<p>Upload video</p>
<input type="file" id="input" accept="video/*" />