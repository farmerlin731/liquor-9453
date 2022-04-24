<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    ref="cartsCanvas"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">- 購物車清單 -</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="cartData.carts?.length == 0" class="tip">
        <h4>
          您的購物車空無一物～ <i class="bi bi-emoji-dizzy"></i><br />
          <button
            type="button"
            class="btn btn-outline-danger mt-5"
            @click="toShopping"
          >
            <b
              ><i class="bi bi-droplet-half" style="color: brown"></i>
              酒單此處去
              <i class="bi bi-droplet-half" style="color: brown"></i>
            </b>
          </button>
        </h4>
      </div>
      <ul v-else class="list-unstyled">
        <li
          v-for="item in cartData.carts"
          :key="item.id"
          class="d-flex flex-row mt-3"
          style="align-items-center;border:1px solid brown;"
        >
          <img
            :src="item.product.imageUrl"
            style="width: 30%; height: 100px; background-color: wheat"
            alt=""
          />
          <div class="content">
            <p>{{ item.product.title }}</p>
            <p>
              ${{ item.product.price }} x {{ item.qty }} {{ item.product.unit }}
            </p>
          </div>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click.prevent="delCartItem(item)"
          >
            <i class="bi bi-x fs-5" v-if="loadingStatus != item.id"></i>

            <font-awesome-icon
              v-else
              :icon="['fa', 'spinner']"
              class="spinner fs-5"
            />
          </button>
        </li>
      </ul>
    </div>

    <div class="offcanvas-footer p-3">
      <div class="d-flex align-items-center justify-content-between">
        <p>
          <span class="me-2">共</span>
          <span class="fw-bold">
            {{ cartData.carts?.length }}
          </span>
          <span class="ms-2">項商品</span>
        </p>
        <p>
          <span class="align-middle me-3">總計</span>
          <span class="h2 align-middle">
            {{ cartData.final_total }}
          </span>
          <span class="align-middle ms-3">元</span>
        </p>
      </div>
      <!-- <RouterLink to="/"> -->
      <button
        type="button"
        class="btn send btn-warning w-100"
        @click="checkout"
        :class="{ disabled: cartData.carts?.length == 0 }"
      >
        前往結帳 <i class="bi bi-send"></i>
      </button>
      <!-- </RouterLink> -->
    </div>
  </div>
</template>

<script>
import Offcanvas from "../../node_modules/bootstrap/js/dist/offcanvas";
import emitter from "@/methods/mitt";

export default {
  data() {
    return {
      cartsCanvas: "",
      cartData: {},
      loadingStatus: "tmp",
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cartData = res.data.data;
        })
        .catch((err) => {
          alert("CART ERROR");
          console.dir(err);
        });
    },

    delCartItem(item) {
      this.loadingStatus = item.id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .delete(url)
        .then((response) => {
          // this.getCart();
          emitter.emit("update-qty");
          this.$pushToastMessage(response, "刪除");

          this.loadingStatus = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openCanvas() {
      this.cartsCanvas.show();
    },
    closeCanvas() {
      this.cartsCanvas.hide();
    },

    toShopping() {
      this.closeCanvas();
      this.$router.push("/products");
    },

    checkout() {
      this.closeCanvas();
      this.$router.push("/orders/userinfo");
    },
  },
  mounted() {
    this.cartsCanvas = new Offcanvas(this.$refs.cartsCanvas);
    this.getCart();
    emitter.on("update-qty", () => {
      this.getCart();
    });
  },
};
</script>

<style lang="scss" scoped>
.tip {
  margin-top: 100px;
  color: brown;
  border: 2px double brown;
  padding: 30px 20px 10px 20px;
}
img {
  object-fit: contain;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content p {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn {
  transition: 0.3s all ease;
}

.spinner {
  animation: spin infinite 1s linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>