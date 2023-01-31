<template>
  <div class="container mx-auto max-w-5xl py-4 min-h-screen px-3" v-if="ready">
    <div
      class="flex items-center justify-center relative mb-4"
      v-if="postsData.length > 0"
    >
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        class="w-full bg-white bg-opacity-75 p-2 outline-none rounded-md"
      />
      <i class="fa fa-search absolute right-2"></i>
    </div>
    <PostComponent
      v-for="post in queriedPosts"
      v-bind:key="post.id"
      :post="post"
    />
  </div>
</template>
<script>
import PostComponent from "@/components/Post.vue";
export default {
  components: {
    PostComponent,
  },
  data: () => ({
    ready: false,
    searchQuery: "",
    users: [],
    posts: [],
  }),
  computed: {
    queriedPosts() {
      if (this.searchQuery) {
        return this.postsData.filter((post) => {
          return post.title.includes(this.searchQuery);
        });
      }
      return this.postsData;
    },
    postsData() {
      return this.posts.map((post) => {
        const user = this.users.find((user) => user.id === post.userId);
        post.user = user;
        return post;
      });
    },
  },
  methods: {
    async fetchPosts() {
      let response = await this.$axios.get("/posts");
      if (response.data) {
        this.posts = response.data;
      }
    },
    async fetchUsers() {
      let response = await this.$axios.get("/users");
      if (response.data) {
        console.log(response.data);
        this.users = response.data;
      }
    },
  },
  mounted() {
    Promise.all([this.fetchPosts(), this.fetchUsers()]).then(() => {
      this.ready = true;
    });
  },
};
</script>
<style lang=""></style>
