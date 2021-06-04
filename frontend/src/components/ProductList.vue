<template>
  <div>
    <section id="results" class="results__wrapper">
      <ul class="results">
        <li class="result" v-for="item in items" :key="item.ID">
          <div class="result__image-wrapper">
            <img
              class="result__image"
              :src="`images/select/${item.SName}.jpg`"
            />
          </div>

          <div class="result__info">
            <h3 class="result__name">{{ item.Vorname }} {{ item.Namename }}</h3>

            <ul class="result-meta">
              <li class="result-meta__item">
                <img class="result-meta__icon" src="icons/butterfly.svg" />
                <p class="result-meta__name">{{ item.SName }}</p>
              </li>
              <li class="result-meta__item">
                <img class="result-meta__icon" src="icons/map.svg" />
                <p class="result-meta__name">{{ item.SOrt }}</p>
              </li>
              <li class="result-meta__item">
                <img class="result-meta__icon" src="icons/star.svg" />
                <p class="result-meta__name">{{ item.SBeschreibung }}</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
.results__wrapper {
backdrop-filter: blur(15px);
}

.results {
	display: block;
	padding: 100px 0;
	max-width: 800px;
	margin: 0 auto;
}

.result {
	display: flex;
	list-style: none;
	margin: 0 0 50px 0;
}

.result__image-wrapper {
	flex: 1;
}

.result__image {
	border-radius: 40px;
	width: 100%;
}

.result__info {
	flex: 1;
	padding: 0 0 0 50px;
}

.result-meta {
	display: block;
	padding: 0;
}

.result-meta__item {
	display: flex;
	list-style: none;
}

.result-meta__icon {
	padding: 0 10px 10px 0;
	width: 40px;
}

.result-meta__name {

}
</style>