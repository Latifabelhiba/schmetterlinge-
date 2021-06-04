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
          v-model="vname"
        /><br /><br />
        <label for="nname">Nach name:</label><br />
        <input
          type="text"
          id="nname"
          name="nname"
          value=""
          required
          v-model="nname"
        /><br /><br />
        <label for="nname">Email:</label><br />
        <input
          type="text"
          id="email"
          name="email"
          value=""
          required
          v-model="email"
        /><br /><br />
        <label for="nameschmetterling">Name des Schmetterlings:</label><br />

        <select name="nameschmetterling" id="nameschmetterling" required v-model="nameschmetterling">
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
          v-model="locationschmetterling"
        /><br /><br />
        <label for="beschrschmetterling">Beschreibung des Schmetterlings:</label
        ><br />
        <textarea
          id="beschrschmetterling"
          name="beschrschmetterling"
          v-model="beschrschmetterling"
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" @click.prevent="saveProduct" />
      </form>

      <div class="banner__text">Schmeterlige in der Schweiz</div>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      vname: "",
      nname: "",
      email: "",
      nameschmetterling: "",
      locationschmetterling: "",
      beschrschmetterling: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          Vorname: this.vname,
          Nachname: this.nname,
          EMail: this.email,
          SName: this.nameschmetterling,
          SOrt: this.locationschmetterling,
          SBeschreibung: this.beschrschmetterling,
        });
        this.vname = "";
        this.nname = "";
        this.email = "";
        this.nameschmetterling = "";
        this.locationschmetterling = "";
        this.beschrschmetterling = "";
        this.$router.push("/list");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>