<template>
  <v-card class="card" max-width="400">
    <v-img  class="text-white " height="500" v-bind:src='img' cover >
      <v-card-title> {{ name }} </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Type of Plant: {{ selected }} 
    </v-card-subtitle>

    <v-card-text>
      <div>House Location: {{ location }}</div>
      <div>Description: {{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn class="button-delete" @click="emitDeletePlant">
        <v-icon>mdi-trash-can</v-icon> Delete
      </v-btn>
    </v-card-actions>
  </v-card>
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
    "selected",
    "id",
    "index",
  ],
  data() {
    return {
      plant: {
        name: "",
        location: "",
        description: "",
        selected: "",
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
.button-delete {
  border: 2px solid #b71c1cc2;
  background: white;
  color: #b71c1cc2;
  transition: all 250ms;
  text-transform: unset;
}
.button-delete:hover {
  background: #e55757;
  color: white;
}
.card{
  margin-bottom: 20px;
}
.v-card__title{
  background: #ffffff8a;
  width: 47vw;
  color: black;
}
.v-card__actions{
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .v-card__title{
    width: 72vw;
  }
}
</style> 
