<script lang="ts">

    let newUsername = 'Username';
    export { newUsername }

    let newUserEmail = 'Email';
    export {newUserEmail}
</script>

<input bind:value={newUsername}>
<h1>Your Username is {newUsername}.</h1>

<input bind:value={newUserEmail}>
<h2>Your Email is {newUserEmail}</h2>

    <p>hello</p>