<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal
      :someProp="someProp"
      theme="dark-mode"
      @closecloseclose="toggleModal"
    >
      <p>我是Slot</p>
      <template v-slot:linkslinks>
        <a href="">登入</a>
        <br>
        <a href="">更多資訊</a>
      </template>
    </Modal>
  </div>
  <input type="text" ref="boo" />
  <button @click="handleClick">點我啊</button>
  <br />
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from "./components/ModalContent.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App",
      someProp: "Sign up for the Giveaway",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.boo);
      this.$refs.boo.classList.add("active");
      this.$refs.boo.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
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
