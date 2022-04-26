<template>
  <div class="home-page">
    <div class="cover">
      <h1>9453 - 酒肆吾觴訂酒網</h1>
      <br />

      <router-link to="/products">
        <button type="button" class="btn">
          <b
            ><i class="bi bi-droplet-half" style="color: brown"></i>
            酒單此處去
            <i class="bi bi-droplet-half" style="color: brown"></i>
          </b></button
      ></router-link>
    </div>
    <div class="container">
      <div class="introduction">
        <h2 class="mb-5">酒類介紹</h2>
        <div class="row">
          <div class="shadow col-10 mt-5 col-md-4">
            <img
              src="https://channel.circles.tw/uploads/2020-12/893902c4bdf233fb230b8624f2819864.jpg"
              alt=""
              srcset=""
            />
            <h4 class="mt-4">白蘭地 Brandy</h4>
            <p class="mt-3">
              白蘭地原文是「燒葡萄酒」的意思，但廣義而言凡是以水果酒為基底，再加以蒸餾製作而成的酒都算是白蘭地哦！
            </p>
          </div>
          <div class="shadow col-10 mt-5 col-md-4">
            <img
              src="https://channel.circles.tw/uploads/2020-12/6c9401cf03df6de0e06cc6ddb3ce43fd.jpg"
              alt=""
              srcset=""
            />
            <h4 class="mt-4">威士忌 Whiskey</h4>
            <p class="mt-3">
              跟白蘭地不同，威士忌主要是以發酵穀物為原料所製成的蒸餾酒，常見的原料有大麥、黑麥、小麥、玉米等。威士忌通常陳放於木桶中，因此「年紀」的計算也是從蒸餾至裝瓶所經過的時間。
            </p>
          </div>
          <div class="shadow col-10 mt-5 col-md-4">
            <img
              src="https://channel.circles.tw/uploads/2021-01/55c67410541202515db95b83e645ad92.png"
              alt=""
              srcset=""
            />
            <h4 class="mt-4">蘭姆酒 Rum</h4>
            <p class="mt-3">
              蘭姆酒由甘蔗的副產品糖蜜，透過發酵和蒸餾製作而成，又可以稱為「糖酒」。從他的名字就可以想像，蘭姆酒通常都帶有醇厚的果香或甘蔗焦香，算是味道強烈、甜膩、又風味十足的酒款。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fullSection">
      <div class="content">
        <h4 class="mb-4">
          <i class="bi bi-cash-coin"></i> 訂閱我們以獲得最新優惠訊息
          <i class="bi bi-cash-coin"></i>
        </h4>
        <div class="input-group mt-5">
          <input
            type="text"
            class="form-control"
            placeholder="輸入 e-mail 信箱"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="orderId"
          />
          <button
            class="btn"
            @click="testFunc"
            type="button"
            id="button-addon2 "
          >
            送出 <i class="bi bi-send"></i>
          </button>
        </div>

        <!-- todo -->
        <!-- <Form
            ref="form"
            class="col-md-6"
            v-slot="{ errors }"
            @submit="submitOrder"
          >
            <div class="mb-3">
              <div class="input-group mt-5">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                ></Field>

                <div>
                  <button class="btn">送出 <i class="bi bi-send"></i></button>
                </div>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
          </Form> -->
      </div>
    </div>

    <div class="feature container mt-5">
      <div class="row d-flex">
        <div class="col-10 col-md-6 pic">
          <img
            src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            srcset=""
            width="100%"
          />
        </div>
        <div class="col-10 col-md-6 d-flex flex-column justify-content-center">
          <h4 class="mt-4 mb-3">《 最實惠的價格 》</h4>
          <p>
            老闆進貨都是閉著眼睛 ALL IN 沒在囉唆！<br />
            只要您在別地方看到更便宜的價格，二話不說直接退差價：）
          </p>
        </div>
        <div
          class="
            d-none d-md-flex
            col-10 col-md-6
            flex-column
            justify-content-center
          "
        >
          <h4 class="mt-4 mb-3">《 最優質的服務 》</h4>
          <p>
            想喝什麼酒找不到？老闆幫你找～<br />
            想要客製化服務？只要你敢提我就敢聽～<br />
            老闆為的是什麼？就是希望每個顧客，都能露出小孩般天真無邪的笑容：）
          </p>
        </div>

        <div class="col-10 col-md-6 pic">
          <img
            src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
            width="100%"
          />
        </div>

        <div
          class="
            d-flex d-md-none
            col-10 col-md-6
            flex-column
            justify-content-center
          "
        >
          <h4 class="mt-4 mb-3">《 最優質的服務 》</h4>
          <p>
            想喝什麼酒找不到？老闆幫你找～<br />
            想要客製化服務？只要你敢提我就敢聽～<br />
            老闆為的是什麼？就是希望每個顧客，都能露出小孩般天真無邪的笑容：）
          </p>
        </div>


      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
// * {
//   border: 2px solid blue;
// }
.cover {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)
      center/100% fixed;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 900px;
}

.cover h1 {
  color: whitesmoke;
  line-height: 1.5;
}
.cover button {
  margin-top: 50px;
  transition: 0.3s all ease;
  border: 2px solid whitesmoke;
  color: whitesmoke;
}

.cover button:hover {
  transform: scale(1.05);
  background-color: whitesmoke;
  color: brown;
}

.introduction {
  margin-top: 100px;
}

.introduction p,
.feature p {
  font-size: 1.1rem;
  padding: 0 20px;
  margin-bottom: 20px;
}

.introduction p {
  text-align: left;
}

@media (max-width: 768px) {
  .introduction .row,
  .feature .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.introduction h4,
.feature h4 {
  font-weight: bold;
  color: brown;
}
.introduction img {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  object-fit: cover;
}

.fullSection {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100% fixed;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: whitesmoke;
}

.fullSection .content {
  width: 40%;
}

.fullSection .btn {
  color: whitesmoke;
  font-weight: bold;
  background-color: brown;
}

@media (max-width: 992px) {
  .fullSection .content {
    width: 100%;
  }
}

.feature .pic {
  padding: 0;
}
</style>



<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>