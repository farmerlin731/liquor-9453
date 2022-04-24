<template>
  <div>
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <i class="fas fa-spinner fa-spin"></i>

          <i class="fa-solid fa-spinner"></i>9453 - 酒肆吾觴訂酒網
          <i class="fa-solid fa-spinner"></i>
          <font-awesome-icon icon="fa-solid fa-spinner" />
        </router-link>

        <!-- <router-link class="navbar-brand" to="/"
        ><img
          src="@/assets/foxconn-logo-90x31.png"
          alt=""
          width="120"
          height="40"
          style="object-fit: cover"
          class="d-inline-block align-text-top"
      /></router-link> -->

        <div class="order-lg-2 ms-auto icon" style="margin-right: 30px">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="openShoppingCarts">
                <i class="bi bi-cart3 fs-4"></i>
                <span
                  class="badge cartQty"
                  :class="{ cartQtyAnimation: cartIsLoading }"
                  v-if="qty > 0"
                  >{{ qty }}</span
                >
              </a>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          ref="toggleBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-lg-1" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link cancel" to="/">首頁</router-link>
            </li>

            <li class="nav-item test">
              <router-link class="nav-link cancel align-middle" to="/products"
                >酒單列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link cancel" to="/about"
                >關於我們</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <CartsCanvas ref="cartsCanvans"></CartsCanvas>
  </div>
</template>

<style lang="scss" scoped>
.navbar-brand {
  position: absolute;
  left: 50px;
}

.nav-item {
  margin-left: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  position: relative;
}
.cartQty {
  position: absolute;
  top: 0px;
  right: -10px;
  width: 23px;
  height: 23px;
  padding: 1px;
  border-radius: 100%;
  background-color: brown;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2px;
}

.cartQtyAnimation {
  animation-name: cartQtyAnimation;
  animation-duration: 0.8s;
}
@keyframes cartQtyAnimation {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
}

.navbar-active {
  color: brown;
}
@media (max-width: 992px) {
  .navbar-brand {
    position: relative;
    left: 0px;
  }
  .nav-item {
    margin-left: 0;
  }

  .cartQty {
    width: 20px;
    height: 20px;
    right: -15px;
    top: 0px;
  }
}
</style>

<script>
import emitter from "@/methods/mitt";
import CartsCanvas from "@/components/CartsCanvas.vue";

export default {
  data() {
    return {
      cartIsLoading: false,
      qty: 0,
    };
  },

  watch: {
    cartIsLoading() {
      setTimeout(() => {
        this.cartIsLoading = false;
      }, 1000);
    },
    //   $route() {
    //     document.querySelector('#navbarNavDropdown').classList.remove('show');
    //   },
  },

  components: { CartsCanvas },

  methods: {
    getCartQty() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.qty = res.data.data.carts.length;
          this.cartIsLoading = true;
        })
        .catch((err) => {
          alert("CART ERROR");
          console.dir(err);
        });
    },

    openShoppingCarts() {
      this.$refs.cartsCanvans.openCanvas();
    },
  },
  mounted() {
    // mobile nav-bar fix
    const cancelBtnList = document.querySelectorAll(".cancel");
    console.log(cancelBtnList);
    cancelBtnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.innerWidth < 1000) {
          this.$refs.toggleBtn.click();
        }
      });
    });

    this.getCartQty();

    emitter.on("update-qty", () => {
      this.getCartQty();
    });
  },
};
</script>