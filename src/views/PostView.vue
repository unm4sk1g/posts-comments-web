<template>
  <div class="container mx-auto max-w-5xl py-4 min-h-screen px-3">
    <PostComponent :post="post" v-if="ready" />
    <div class="comments">
      <CommentComponent
        v-for="comment in post.comments"
        :data="comment"
        v-bind:key="comment.id"
      />
    </div>
  </div>
</template>
<script>
import PostComponent from "@/components/Post.vue";
import CommentComponent from "@/components/Comment.vue";
export default {
  components: {
    PostComponent,
    CommentComponent,
  },
  data: () => ({
    post: {},
    ready: false,
  }),

  methods: {
    fetchPost(id) {
      return this.$axios.get(`/posts/${id}`).then((response) => {
        if (response.data) {
          this.post = response.data;
          Promise.all([
            this.fetchUser(this.post.userId),
            this.fetchComments(this.post.id),
          ]).then(() => {
            this.ready = true;
          });
        }
      });
    },
    async fetchComments(id) {
      let response = await this.$axios.get(`/posts/${id}/comments`);
      if (response.data) {
        this.post.comments = response.data;
      }
    },
    async fetchUser(id) {
      let response = await this.$axios.get(`/users/${id}`);
      if (response.data) {
        this.post.user = response.data;
      }
    },
  },
  mounted() {
    if (!this.$route.params.id) {
      this.$router.replace("/posts");
    } else {
      this.fetchPost(this.$route.params.id);
    }
  },
};
</script>
<style lang=""></style>
