<template>
  <div class="col-12 col-md-4 mb-3">
    <div class="card container-plant p-3 border h-100">
      <img v-bind:src='img' style="height: 70%; border-radius: 20rem 20rem 0 0;"/>
      <div class="card-body">
        <h3 class="card-title">{{ name }}</h3>
        <div class="list-group">
          <div class="title-card">
            <h4>House Location:</h4>
            <p class="list-group-item">{{ location }}</p>
          </div>
          <div class="title-card">
            <h4>Description:</h4>
            <p class="list-group-item">{{ description }}</p>
          </div>
        </div>
        <button class="button button-delete" @click="emitDeletePlant">
          <i class="bx bx-trash-alt"></i>Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlantItem",
  props: [
    "name",
    "location",
    "description",
    "img",
   // "alt",
   // "selected",
    "id",
    "index",
  ],
  data() {
    return {
      plant: {
        name: "",
        location: "",
        description: "",
     //   selected: "",
      },
    };
  },
  methods: {
    emitDeletePlant() {
      this.$emit("delete-plant");
    },
  },
};
</script>

<style scoped>
/* items plants */
.button-delete {
  border: 2px solid red;
  background: white;
  color: red;
  transition: all 250ms;
}
.button-delete:hover {
  background: #e55757;
  color: white;
}
.card-title {
  color: green;
  border-bottom: 2px solid #9fcbca;
  margin-bottom: 2rem;
}
.container-plant {
  border-radius: 10rem 10rem 0 0;
  background-color: rgb(162, 162, 162);
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.title-card h4 {
  color: #fff;
  opacity: 0.7;
  font-size: 1.25rem;
  font-family: "Josefin Sans", sans-serif;
  font-style: italic;
}
.list-group-item {
  background: #b9d4d4;
  font-size: 1.35rem;
  padding: 1rem;
  border-radius: 2rem;
}
</style>
