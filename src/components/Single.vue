<template>
  <div class="container">
    <h2>{{ story.title }}</h2>
    <p>Score: {{ story.score }}</p>
    <p>{{ story.url }}</p>
    <div v-for="(idx,comment) in comments" :key="idx(comment)">
      <div class="comment-wrap">
        <div class="comment-block">
          <p class="comment-text">{{ comment.text }}</p>
          <div class="bottom-comment">
            <div class="comment-author">{{ comment.by }}</div>
            <div class="comment-date">{{ comment.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Single",
  data: function() {
    return {
      story: {},
      comments: []
    };
  },
  created: function() {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/" +
          this.$route.params.id +
          ".json"
      )
      .then(res => {
        this.story = res.data;
        this.story.comments = [];
        this.story.kids.forEach(id => {
          axios
            .get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(res => {
              this.$nextTick(() => {
                console.log(res.data);
                this.comments.push(res.data);
              });
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>