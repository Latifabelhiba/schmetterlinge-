<template>
  <div>
    <div class="banner">
      <br />

      <form class="form" method="post" action="action.php">
        <label for="vname">Vorname:</label><br />
        <input
          type="text"
          id="vname"
          name="vname"
          value=""
          required
        /><br /><br />
        <label for="nname">Nach name:</label><br />
        <input
          type="text"
          id="nname"
          name="nname"
          value=""
          required
        /><br /><br />
        <label for="nname">Email:</label><br />
        <input
          type="text"
          id="email"
          name="email"
          value=""
          required
        /><br /><br />
        <label for="nameschmetterling">Name des Schmetterlings:</label><br />

        <select name="nameschmetterling" id="nameschmetterling" required>
          <option value="distelfalter">Distelfalter</option>
          <option value="zitronenfalter">Zitronenfalter</option>
          <option value="taubenschwaenzchen">Taubenschwänzchen</option>
          <option value="admiral">Admiral</option>
          <option value="aurorafalter">Aurorafalter</option>
          <option value="tagpfauenauge">Tagpfauenauge</option></select
        ><br /><br />

        <label for="locationschmetterling"
          >Wo hast du den Schmetterling gesichtet:</label
        ><br />
        <input
          type="text"
          id="locationschmetterling"
          name="locationschmetterling"
          value=""
        /><br /><br />
        <label for="beschrschmetterling">Beschreibung des Schmetterlings:</label
        ><br />
        <textarea
          id="beschrschmetterling"
          name="beschrschmetterling"
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>

      <div class="banner__text">Schmeterlige in der Schweiz</div>
    </div>

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
                <p class="result-meta__name">
                  {{ item.SBeschreibung }}
                </p>
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
</style>