<template>
  <div>
    <div class="cover"></div>

    <div v-if="tmpProd.title" class="container mt-5">
      <div class="row">
        <div class="col-md-5">
          <img :src="this.tmpProd.imageUrl" alt="content-image" />
        </div>
        <div class="col-md-7">
          <div class="content">
            <h5>
              {{ this.tmpProd.title }}
            </h5>
            <p>{{ this.tmpProd.content }}</p>
            <del class="h5 mt-3">原價 {{ this.tmpProd.origin_price }} 元</del>
            <div class="h5 mt-3">
              現在只要<b style="color: coral"> {{ this.tmpProd.price }} </b>元
            </div>
            <div class="tmp">
              <div class="input-group mt-4">
                <input
                  v-model.number="quantity"
                  type="number"
                  class="form-control"
                  min="1"
                />
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="buyProd"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1621462647729-e8543be91c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100%;
}

img {
  width: 100%;
  object-fit: contain;
}

.content {
  border: 2px solid wheat;
  padding-bottom: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content h5 {
  background-color: wheat;
  color: brown;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
}

.content p {
  padding: 0px 30px;
  margin-top: 20px;
}

.content .tmp {
  width: 70%;
}
</style>
<script>
import emitter from "@/methods/mitt";

export default {
  data() {
    return {
      tmpProd: {},
      tmpString: "",
      quantity: 1,
    };
  },
  methods: {
    getProdData() {
      emitter.emit("loading");
      const { id } = this.$route.params;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(url)
        .then((response) => {
          this.tmpProd = response.data.product;
          emitter.emit("un-loading");
        })
        .catch((err) => {
          alert(err.data.message);
          emitter.emit("un-loading");
        });
    },
    buyProd() {
      emitter.emit("loading");
      let tmpCart = {
        product_id: this.$route.params.id,
        qty: this.quantity,
      };

      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, { data: tmpCart })
        .then(() => {
          // this.$pushToastMessage(response, "加入購物車");
          emitter.emit("update-qty");
          this.$router.push("/products/");
        })
        .catch((err) => {
          alert("加入購物車失敗 :(");
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getProdData();
  },
};
</script>
