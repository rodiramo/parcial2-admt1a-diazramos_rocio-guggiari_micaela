<template>
  <div class="container mt-5 mb-5" id="add">
    <h2 class="text-center mb-3">Add More Plants</h2>
    <form class="form-plants" v-on:submit.prevent="$emit('create-new-plant', plant)"  @keydown.enter.prevent="$emit('emitNewPlant', plant)">
      <label for="name">Name of your Plant*</label>
      <input
        type="text"
        id="name"
        v-model="plant.newName"
        name="name"
        placeholder="Whats the name of your plant?"
      />
      <label for="location">House Location of your Plant*</label>
      <input
        type="text"
        v-model="plant.newLocation"
        name="family"
        placeholder="In what area of the house is your plant?"
      />
      <label for="description">Description</label>
      <textarea
        type="text"
        name="description"
        v-model="plant.newDescription"
        placeholder="Anything in particular about this plant you want to remember?"
      ></textarea>
      <div class="d-flex justify-content-center">
        <button @click="$emit('create-new-plant', plant)">Add Plant</button>
      </div>
      <p>*these are required fields, please fill them before submiting</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPlant",
  components: "",
  props:"plant",
  data() {
    return {
      plant: {
        newName: "",
        newLocation: "",
        newDescription: ""
      }
     };
  },
  methods: { 
   // emitCreatePlant() {
   //   this.$emit("create-new-plant");
   // },
  },
  computed: {},
};
</script>

<style></style>
