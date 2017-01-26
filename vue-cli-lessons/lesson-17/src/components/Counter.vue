<template>
    <div>
        <h1>The most important thing of this lesson is that by running `npm run dev` we can do hot module replacement. Try to do any change you want in your code and see how your browser reflects that change.
        No need to reload pages or such.</h1>
        <h2>The count is: {{ count }}</h2>

        <p>
            <button @click="count += 1">Increment</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return { count:0 };
        }
    }
</script>