<template>
  <div>
    <div class="cover"></div>

    <div class="container mt-5">
      <h2>關於我們</h2>
      <div class="row tmp">
        <div class="col-md-4">
          <i
            class="bi bi-house-heart"
            style="color: brown; font-size: 100px; display: block"
          ></i>
          <h5>店家位置</h5>
          <p class="mt-4">
            『 台北市士林區 』<br />陽明山上，<br />最閃亮的那棟建築物就是了。
          </p>
        </div>
        <div class="col-md-4">
          <i
            class="bi bi-alarm"
            style="color: brown; font-size: 100px; display: block"
          ></i>
          <h5>營業時間</h5>
          <p class="mt-4">
            『 24 / 7 』<br />您需要的時候，<br />我們隨時都會伴您身邊。
          </p>
        </div>
        <div class="col-md-4">
          <i
            class="bi bi-telephone-inbound"
            style="color: brown; font-size: 100px; display: block"
          ></i>
          <h5>聯絡電話</h5>
          <p class="mt-4">『 (07) 3345-678 』<br />- 我再重複一次 -<br />『 (07) 3345-678 』</p>
        </div>
      </div>
      <div class="faq">
        <h2 class="mt-5">常見問與答</h2>
        <div class="accordion shadow mt-4" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq0"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                請問有外送服務嗎？
              </button>
            </h2>
            <div
              id="faq0"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                沒辦法喲！都要到店內親自取貨唷！
              </div>
            </div>
          </div>
        </div>
        <div class="accordion shadow mt-4" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                會有優惠活動嗎？
              </button>
            </h2>
            <div
              id="faq1"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <strong>當然！敬請期待～</strong> 
              </div>
            </div>
          </div>
        </div>
        <div class="accordion shadow mt-4" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                請問老闆單身嗎？
              </button>
            </h2>
            <div
              id="faq2"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <code>Vip15才能詢問此問題唷～</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 800px;
}
.cover {
  width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center/100%;
}

.tmp {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>