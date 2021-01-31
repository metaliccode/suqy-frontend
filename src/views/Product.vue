<template>
  <div class="Product">
    <HeaderShayna />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more text-left">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt />
                </div>
                <div class="product-thumbs" v-if="productDetails.galleries.length > 0">
                  <carousel class="product-thumbs-track ps-slider" :dots="false" :nav="false">
                    <!-- looping product details -->
                    <div
                      v-for="ss in productDetails.galleries"
                      :key="ss.id"
                      class="pt"
                      v-on:click="gantiImage(ss.photo)"
                      :class="ss.photo == gambar_default ? 'active':'' "
                    >
                      <img :src="ss.photo" alt />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <!-- untuk memanggil product dari api -->
                    <span>{{productDetails.type}}</span>
                    <h3>{{productDetails.name}}</h3>
                  </div>
                  <div class="pd-desc">
                    <p v-html="productDetails.description"></p>

                    <h4>Rp. {{productDetails.price}}</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/ShopingCart">
                      <a
                        @click="saveKeranjang(productDetails.id, productDetails.name, productDetails.price, productDetails.galleries[0].photo)"
                        href="#"
                        class="primary-btn pd-cart"
                      >Add To Cart</a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <relatedProduct />
    <FooterShayna />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderShayna from "@/components/HeaderShayna.vue";
import FooterShayna from "@/components/FooterShayna.vue";
import relatedProduct from "@/components/relatedProduct.vue";

import carousel from "vue-owl-carousel";

import axios from "axios";

export default {
  name: "Product",
  components: {
    HeaderShayna,
    FooterShayna,
    relatedProduct,
    carousel
  },

  data() {
    return {
      gambar_default: "",
      productDetails: [],
      keranjangUser: []
      // untuk dinamis product dari cpanel cek
      // id: this.$route.params.id
    };
  },

  methods: {
    gantiImage(urlgambar) {
      this.gambar_default = urlgambar;
      //eslint-disable-next-line no-console
      // untk cek id di console
      // console.log(this.id);
    },
    //untuk menampilkan gambar detail dengan function
    setDataPicture(data) {
      //replace object productDetails dengan data dari API
      this.productDetails = data;
      // replace value gambar default dengan data API (galleries)
      this.gambar_default = data.galleries[0].photo;
    },
    // dari dokumen cookbook vue js
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
      var productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct
      };
      this.keranjangUser.push(productStored);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
    }
  },

  // untuk menggunkan axios
  mounted() {
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
    axios
      // masukan link api dari backend
      .get("http://127.0.0.1:8000/api/products", {
        params: {
          id: this.$route.params.id
        }
      })
      // res variable result
      .then(res => this.setDataPicture(res.data.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.product-thumbs .pt {
  margin-right: 14px;
}
</style>
