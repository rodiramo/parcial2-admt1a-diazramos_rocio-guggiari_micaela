<template>
  <div class="container mt-5 mb-5" id="add">
    <h2 class="text-center mb-3">Add More Plants</h2>
    <form class="form-plants" @submit.prevent="$emit('emitCreatePlant')"  @keydown.enter.prevent="">
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
        <input class="button-add-plant button" type="submit" value="Add Plant" > 
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
  methods: { emitCreatePlant() {
      this.$emit("create-new-plant");
    },},
  computed: {},
};
</script>

<style></style>
