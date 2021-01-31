<template>
  <!-- Hero Section Begin -->
  <section class="HeroShayna hero-section">
    <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">
      <div class="single-hero-items set-bg" style="background-image: url('img/banner-3.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-hero">
              <span>ALL CATEGORIES</span>
              <h1>BIG SALE!</h1>
              <p>
                Anda belanja, anda beramal, harga pas anda pun puas.
                Anda bisa Bbelanja online kapan pun & dimana pun dengan aman dan nyaman hanya di As-Suqy Store.
              </p>
              <a href="#" class="primary-btn">ORDER NOW</a>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-2.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-hero1">
              <span>ONLY THIS WEEK BEST DEAL</span>
              <h1>GRATIS ONGKIR</h1>
              <p>
                Promo gratis ongkir untuk pembelian produk minggu pertama !
                <br />Hanya di toko online
                <strong>As-Suqy Store</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="single-hero-items set-bg" style="background-image: url('img/hero-3.jpg')">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 text-hero1">
              <span>ONLY THIS WEEK, *SELECT YOUR ITEMS ONLY</span>
              <h1>MEGA SALE !</h1>
              <p>
                Buruan beli, jangan sampai ketinggalan promonya !
                <br />
                <strong>UP TO 50% OFF</strong>
              </p>

              <!-- <a href="#" class="primary-btn">Shop Now</a> -->
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "HeroCarousel",
  components: {
    carousel
  }
};
</script>
<style scoped>
.text-hero {
  text-align: left;
}
.text-hero1 {
  text-align: right;
}
</style>
