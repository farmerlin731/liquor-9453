<template>
  <div>
    <div class="cover"></div>
    <div class="container mt-5">
      <h2 class=" mb-5"> 訂單資訊</h2>
      <ProgressBar :activeIndex="step" />
      <router-view @next="next" ></router-view>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)
      center/100%;
}

.btn {
  border: 0;
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  background-color: navy;
  color: white;
}

.btn:active {
  transform: scale(0.92);
}

.btn:disabled {
  background-color: powderblue;
  cursor: not-allowed;
}
</style>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  data() {
    return {
      step: "1",
    };
  },
  components: { ProgressBar },
  methods: {
    next() {
    this.step++;
    },
  },
};
</script>