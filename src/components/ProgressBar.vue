<template>
  <div class="bar-container">
    <div class="bar">
      <div class="progress" id="progress"></div>
      <div class="circle active">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
    </div>

    <div class="test">
      <div class="tmp-cont"><p>填寫資料</p></div>
      <div class="tmp-cont"><p>確認資料</p></div>
      <div class="tmp-cont"><p>完成訂單</p></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar-container {
  margin: 20px 100px;
}

@media (max-width: 992px) {
  .bar-container {
    margin: 20px 0px;
  }
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
}

.bar::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: powderblue;
  z-index: -1;
}

.progress {
  position: absolute;
  width: 0%;
  height: 3px;
  background-color: navy;
  z-index: -1;
  transition: all 0.4s ease;
}

.circle {
  background-color: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  border: 3px solid powderblue;
  font-size: 2rem;
  color: gray;
  transition: all 0.4s ease;
}
.test {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tmp-cont {
  width: 70px;
  // width: 100%;
  white-space: nowrap;
  color: gray;
  font-weight: bold;
  font-size: 1rem;
}

.tmp-cont.active {
  color: black;
}
.circle.active {
  border: 3px solid navy;
  color: midnightblue;
}
</style>

<script>
export default {
  data() {
    return {
      //   activeIndex: 3,
    };
  },

  props: ["activeIndex"],
  watch: {
    activeIndex() {
      this.updateProgress();
    },
  },
  methods: {
    updateProgress() {
      const circles = document.querySelectorAll(".circle");
      const text = document.querySelectorAll(".tmp-cont");
      const progress = document.getElementById("progress");
      circles.forEach((item, index) => {
        if (index < this.activeIndex) {
          item.classList.add("active");
          text[index].classList.add("active");
        } else {
          item.classList.remove("active");
          text[index].classList.remove("active");
        }
      });
      progress.style.width =
        ((this.activeIndex - 1) / (circles.length - 1)) * 100 + "%";
    },
  },

  mounted() {
    this.updateProgress();
  },
};
</script>