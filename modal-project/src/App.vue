<template>
<h1>{{title}}</h1>
  <input type="text" ref="boo">
  <button @click="handleClick">點我啊</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title:'My First Vue App'
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.boo)
      this.$refs.boo.classList.add('active')
      this.$refs.boo.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
