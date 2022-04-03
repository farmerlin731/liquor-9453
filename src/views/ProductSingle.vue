<template>
  <div>
    <div class="cover"></div>

    <div
      v-if="tmpProd.title"
      class="container mt-5"
      style="border: 2px solid wheat"
    >
      <h2 style="padding: 10px; background-color: wheat">
        {{ this.tmpProd.title }}
      </h2>
      <div class="row">
        <div class="col-md-6">
          <img height="400" :src="this.tmpProd.imageUrl" alt="" />
        </div>
        <div class="col-md-6" style="padding: 50px">
          <p>{{ this.tmpProd.content }}</p>
          <del class="h5 mt-3">原價 {{ this.tmpProd.origin_price }} 元</del>
          <div class="h5 mt-3">
            現在只要<b style="color: coral"> {{ this.tmpProd.price }} </b>元
          </div>
          <!-- <button @click="buyProd" type="button" class="btn btn-success">
            我要購買
          </button> -->
          <div>
            <div class="input-group mt-4">
              <input
                v-model.number="quantity"
                type="number"
                class="form-control"
                min="1"
              />
              <button
                type="button"
                class="btn btn-outline-success"
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
</template>

<style lang="scss">
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1621462647729-e8543be91c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100%;
}
.container {
  padding: 0;
}

img {
  display: block;
  margin: 20px auto;
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
    testFunc() {
      const { id } = this.$route.params;
      alert(id);
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
          alert('成功加入購物車！ :)');
          this.$router.push("/products/");
        })
        .catch((err) => {
          console.dir(err);
        });
    },

    // addToCart(item, quantity = 1) {
    //   emitter.emit("loading");
    //   let tmpCart = {
    //     product_id: item.id,
    //     qty: quantity,
    //   };
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
    //   this.$http
    //     .post(url, { data: tmpCart })
    //     .then(() => {
    //       emitter.emit("un-loading");
    //     })
    //     .catch((err) => {
    //       console.dir(err);
    //       emitter.emit("un-loading");
    //     });
    // },
  },
  mounted() {
    this.getProdData();
  },
};
</script>
