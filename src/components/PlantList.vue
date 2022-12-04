<template>
  <div id="plants" class="mb-5 mt-5">
    <h2 class="text-center mb-3">My Plants</h2>
    <div class="container text-center">
      <div class="row">
        <!--plant item-->
        <plant-item
        v-for="(plant, index) in plants"
        v-bind:key="index"
        v-bind:index="index"
        v-bind:img="`./assets/${plant.img}`"
        v-bind:name="plant.name"
        v-bind:location="plant.location"
        v-bind:description="plant.description"
        @delete-plant="deletePlant(index)"
        >
      </plant-item>
    </div>
    <new-plant @create-new-plant="add"></new-plant>
    </div>
  </div>
</template>

<script>
import PlantItem from "./PlantItem";
import NewPlant from "./NewPlant";

export default {
  name: "PlantList",
  components: { NewPlant, PlantItem },
  props: {
    // msg: String
  },
  data() {
    return {
      plants: [
        {
          id: 1,
          img: ".../assets/planta-lavanda.jpg",
          name: "Lavender",
          location: "The bedroom",
          description: "Next to the bed",
        },
        {
          id: 2,
          img:".../assets/planta-orquidea.jpg",
          name: "Orchid",
          location: "Kitchen",
          description: "Next to the spice rack",
        },
        {
          id: 3,
          img:".../assets/planta-ficus.jpg",
          name: "The Big One",
          location: "Livingroom",
          description: "Next to the speaker",
        },
      ],
    };
  },
  mounted() {
//    this.getFromLocalStorage();
  },
  methods: {
    deletePlant(index) {
      console.log(index);
      this.plants.splice(index, 1);
    },
    add(plant) {
        let newPlant = {
        name: plant.newName,
        location: plant.newLocation,
        description: plant.newDescription,
            };
        if (newPlant.name.length > 0) {
        this.plants.push(newPlant);
       // this.saveToLocalStorage();
      }

    alert('hello');
    },
  //    this.saveToLocalStorage();
    //  createNewPlant(plant) {
    //    // adds a new plant to the array
    //    let newPlant = {
    //      name: plant.newPlantName,
    //      description: plant.newPlantDesc,
    //      location: plant.newPlantLoc,
    //      id: this.newplantId,
    //    };
    //    if (newPlant.name.length > 0) {
    //      this.plants.push(newPlant);
    //      this.saveToLocalStorage();
    //    }
    //  },
    //  updateAplant(updatedPlant) {
    //    this.plants.forEach((plant) => {
    //      if (plant.id === updatedPlant.itemId) {
    //        plant.name = updatedPlant.itemName;
    //        plant.description = updatedPlant.itemDesc;
    //        plant.location = updatedPlant.itemLoc;
    //      }
    //    });

  //  getFromLocalStorage() {
  //    if (localStorage.plants)
  //      this.plants = JSON.parse(localStorage.getItem("plants"));
  //  },
  //  saveToLocalStorage() {
  //    localStorage.setItem("plants", JSON.stringify(this.plants));
  //  },
  },
};
</script>

<style scoped></style>
