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
        v-bind:img="plant.img"
        v-bind:name="plant.name"
        v-bind:location="plant.location"
        v-bind:selected="plant.selected"
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
          img: "./imgs/planta-lavanda.jpg",
          name: "Lavender",
          location: "The bedroom",
          description: "Next to the bed",
          selected: "Lavender",
        },
        {
          id: 2,
          img:"./imgs/planta-orquidea.jpg",
          name: "Orchid",
          location: "Kitchen",
          description: "Next to the spice rack",
          selected: "Orchid"
        },
        {
          id: 3,
          img:"./imgs/planta-ficus.jpg",
          name: "The Big One",
          location: "Livingroom",
          description: "Next to the speaker",
          selected: "Ficus"
        },
      ],
      todoList: [
        { "id": 0, "title": "Water your plants", "done": false },
        { "id": 1, "title": "Cut the Stems", "done": true },
      ],
      //empty new todo
      new_todo: '',
      isactive: true,
      showComplete: false,
    };
  },
  mounted() {
    this.getFromLocalStorage();
  },
  computed: {
    //filters not done items
    pending: function() {
      return this.todoList.filter(function(item) {
        return !item.done;
      })
    },
    //filters done items
    completed: function() {
      return this.todoList.filter(function(item) {
        return item.done;
      });
    },
  },
  methods: {
    // new plant
    deletePlant(index) {
      console.log(index);
      this.plants.splice(index, 1);
      this.saveToLocalStorage();   
    },
    add(plant) {
      let newPlant = {
        name: plant.newName,
        location: plant.newLocation,
        description: plant.newDescription,
        selected: plant.newSelected,
      };
      if (newPlant.name.length > 0) {
        this.plants.push(newPlant);
        this.saveToLocalStorage();
      }
    },
    getFromLocalStorage() {
      if (localStorage.plants)
        this.plants = JSON.parse(localStorage.getItem("plants"));
    },
    saveToLocalStorage() {
      localStorage.setItem("plants", JSON.stringify(this.plants));
    },
    //add task
    addTask: function() {
      // validation check
      if (this.new_todo) {
        this.todoList.push({
          id: this.todoList.length,
          title: this.new_todo,
          done: false,
        });
      }
      // reset new_todo
      this.new_todo = '';
      return true;
    },
    //delete items todo
    deleteItem: function(item) {
      this.todoList.splice(item, 1);
    },
    //shows complete
    toggleShowComplete: function() {
      this.showComplete = !this.showComplete;
    },
    //clears all tasks
    clearAll: function() {
      this.todoList = [];
    }
  },

};
</script>

<style scoped>
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px;
}
</style>
