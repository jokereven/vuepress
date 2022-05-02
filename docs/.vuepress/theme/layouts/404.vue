<template>
  <div class="theme-container">
    <div class="error">
      <div class="container">
        <div class="icon"></div>
        <a href="/" class="go-back">返回首页</a>
        <blockquote class="msg">{{ getMsg() }}</blockquote>
      </div>
	  </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style scoped>
 @import "404.css";
 .theme-container{
   width: 100%;
   height: auto;
 }
 .msg{
   margin-top:4rem;
 }
</style>
