<!-- <template>
  <div class="container mt-5 mb-5" id="add">
    <h2 class="text-center mb-3">Add More Plants</h2>
    <form class="form-plants" v-on:submit.prevent="add()"  @keydown.enter.prevent="">
      <label for="name">Name of your Plant*</label>
      <input type="text" id="name" v-model="plant.newName" name="name" placeholder="Whats the name of your plant?"/>
      <label for="location">House Location of your Plant*</label>
      <input type="text" v-model="plant.newLocation" name="family" placeholder="In what area of the house is your plant?"/>
      <label for="type"> Type of Plant: </label>
      <select v-model="plant.newSelected">
        <option value="" disabled>--Please choose an option--</option>
        <option value="Unkwown">Unknown</option>
        <option value="Calathea">Calathea</option>
        <option value="Orchid">Orchid</option>
        <option value="Monstera">Monstera</option>
        <option value="Lavender">Lavender</option>
        <option value="Succulent">Succulent</option>
        <option value="Cactus">Cactus</option>
        <option value="Ficus">Ficus</option>  
        <option value="Philodendron">Philodendron</option>
        <option value="Tomato">Tomato</option>
        <option value="Anthurium">Anthurium</option>  
        <option value="Aglaomena">Aglaomena</option>
        <option value="Alocasia">Alocasia</option>
        <option value="Aloe Vera">Aloe Vera</option>
      </select>
      <label for="description">Description</label>
      <textarea type="text" name="description" v-model="plant.newDescription" placeholder="Anything in particular about this plant you want to remember?"></textarea>
      <div class="d-flex justify-content-center">
        <input type="submit" value="Add Plant">      
      </div>
      <p>*these are required fields, please fill them before submiting</p>
    </form>
  </div>
</template> -->
<template>
  <v-form ref="form">
    <v-text-field  :counter="10"  label="Name" required></v-text-field>
    <v-text-field  label="E-mail" required></v-text-field>
    <v-select
      v-model="select"
      label="Select"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      variant="underlined"
    ></v-select>
    <!-- <v-btn color="success" class="mr-4" @click="validate">
      Validate
    </v-btn> -->
    
  </v-form>
</template>

<script>
export default {
  name: "NewPlant",
  components: "",
  data() {
    return {
      plant: {
        newName: "",
        newLocation: "",
        newSelected: "",
        newDescription: "",
      },
    };
  },
  methods: {
    add() {
      this.$emit("create-new-plant", this.plant);
      this.plant.newName = "";
      this.plant.newLocation = "";
      this.plant.newSelected = "";
      this.plant.newDescription = "";
    },
  },
  computed: {},
};
</script>
<style></style>