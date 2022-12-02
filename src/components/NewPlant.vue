<template>
  <div class="container mt-5 mb-5" id="add">
    <h2 class="text-center mb-3">Add More Plants</h2>
    <form class="form-plants" @keyup.enter="$emit('create-new-plant')">
      <label for="name">Name of your Plant*</label>
      <input
        type="text"
        id="name"
        v-model="name"
        name="name"
        placeholder="Whats the name of your plant?"
      />
      <label for="location">House Location of your Plant*</label>
      <input
        type="text"
        v-model="location"
        name="family"
        placeholder="In what area of the house is your plant?"
      />
      <label for="description">Description</label>
      <textarea
        type="text"
        name="description"
        v-model="description"
        placeholder="Anything in particular about this plant you want to remember?"
      ></textarea>
      <div class="d-flex justify-content-center">
        <button @click="$emit('create-new-plant')">Add Plant</button>
      </div>
      <p>*these are required fields, please fill them before submiting</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPlant",
  components: "",
  props: {},
  data() {
    return {
      name: "",
      location: "",
      description: "",
    };
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
