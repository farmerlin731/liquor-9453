<template>
  <div class="footer">
    <!-- Footer -->
    <footer class="text-white text-center">
      <!-- Copyright -->
      <div
        class="text-center tmp"
        style="background-color: rgba(10, 66, 117, 0)"
      >
        <br /><b style="font-size: 16px"
          >© 2022 Copyright: Farmer - 此網站僅供學習使用、無任何商業用途。
          <router-link to="/admin" class="icon"
            ><i class="bi bi-gear mb-5"></i></router-link
        ></b>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
.footer {
  margin-top: 50px;
  text-align: left;
  // background-color: rgba(10, 66, 117, 0.6);
  background-color: rgb(186, 84, 84);
}

.tmp {
  display: flex;
  align-items: center;
  justify-content: center;
  padding:20px;
}

.tmp-text {
  color: white;
  text-decoration: none;
}
.icon {
  transition: 0.5s all ease;
  color: wheat;
}
</style>