<template>
  <div class="comment bg-white bg-opacity-90 p-4 my-4 rounded-md">
    <h4 class="font-bold text-sm mb-4">{{ data.email.toLowerCase() }}</h4>
    <h2 class="text-lg">{{ data.name }}</h2>
    <h5 class="text-sm">{{ data.body }}</h5>
  </div>
</template>
<script>
export default {
  name: "CommentComponent",
  props: ["data"],
};
</script>
<style lang=""></style>
