<template>
  <div class="post bg-white bg-opacity-90 p-6 mb-4 rounded-md" v-if="post.user">
    <div class="top-bar flex justify-between">
      <div class="company-info flex flex-col">
        <h1 class="title text-4xl">
          {{ post.user?.company?.name }}
        </h1>
        <div>
          {{ post.user?.company?.catchPhrase }} ·
          <a class="text-blue" :href="post.user?.website" target="_blank">{{
            post.user?.website
          }}</a>
        </div>
      </div>
      <div class="actions md:flex-row flex flex-col items-end">
        <a :href="getMapsURL(post)" target="_blank"
          ><button class="btn">
            <i class="fa fa-location-dot mr-0 md:mr-2"></i
            ><span class="hidden md:inline">Address</span>
          </button></a
        >
        <a :href="'tel:' + post.user?.phone"
          ><button class="ml-0 md:ml-2 btn">
            <i class="fa fa-phone mr-0 md:mr-2"></i
            ><span class="hidden md:inline">Call</span>
          </button></a
        >
        <a :href="'mailto:' + post.user?.email"
          ><button class="ml-0 md:ml-2 btn">
            <i class="fa fa-envelope mr-0 md:mr-2"></i
            ><span class="hidden md:inline">Email</span>
          </button></a
        >
      </div>
    </div>
    <div class="content mt-6">
      <h1 class="title text-3xl flex flex-col">{{ post.title }}</h1>
      <p class="caption text">{{ post.body }}</p>
    </div>
    <div class="bottom-bar flex justify-between items-center mt-6">
      <div class="user-info flex justify-center items-center">
        <div :class="generateAvatarColor()">
          {{ getAvatarContent(post.user) }}
        </div>
        <span class="ml-2 mr-2">@{{ post.user?.username }}</span> ·
        <a class="text-blue ml-2" :href="`mailto:${post.user?.email}`">{{
          post.user?.email
        }}</a>
      </div>
      <div>
        <router-link :to="`/posts/${post.id}`"
          ><span
            ><i class="fa fa-comments mr-2"></i> View Comments</span
          ></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post"],
  name: "PostComponent",
  methods: {
    generateAvatarColor() {
      let colors = ["bg-pink-500", "bg-green-500", "bg-blue"];
      return "avatar " + colors[Math.floor(Math.random() * colors.length)];
    },
    getAvatarContent(user) {
      let content = "";
      const splitted = user.name.split(" ");
      splitted.forEach((word) => {
        content += word[0];
      });
      return content.length > 2 ? content.slice(0, 2) : content;
    },
    getMapsURL(post) {
      if (post.user) {
        return `https://google.com/maps/search/?api=1&query=${post.user.address.geo.lng},${post.user.address.geo.lat}`;
      }
      return ``;
    },
  },
};
</script>
<style lang=""></style>
