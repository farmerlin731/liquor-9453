<template>
  <div class="container">
    <div class="tip">
      <img src="@/assets/404.jpeg" alt="" />
      <h4 class="mt-3">
        Opps〜 此頁面喝太醉離家出走了 <i class="bi bi-emoji-dizzy"></i><br />
        <button class="btn btn-outline-danger mt-3" @click="toHome">
          <b
            ><i class="bi bi-droplet-half" style="color: brown"></i>
            回到首頁
            <i class="bi bi-droplet-half" style="color: brown"></i>
          </b>
        </button>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push('/');
    }
  }
  
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.tip {
  margin-top: 100px;
  margin-bottom: 20px;
  max-width: 500px;
  color: gray;
  padding: 30px 20px 10px 20px;
}
img {
  width: 100%;
}
</style>