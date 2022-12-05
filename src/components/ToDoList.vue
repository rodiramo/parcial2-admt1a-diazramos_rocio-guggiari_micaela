<template>
    <section id="tasks" class="todo-wrapper v-container">
        <h2 class="todo-title text-center"> Tasks to do</h2>
        <!--pending task items-->
        <div v-if="pending.length > 0" v-bind:class="{active:isactive}">
            <p class="text-center">You have {{ pending.length }} pending tasks<span v-if="pending.length>1">s</span></p>
            <transition-group name="todo-item" tag="ul" class="todo-list">
            <!-- task item-->
                <li v-for="(item) in pending" v-bind:key="item.title">
                    <input class="todo-checkbox" :id="'item_' + item.id" v-model="item.done" type="checkbox">
                    <label :for="'item_' + item.id"></label>
                    <span class="todo-text">{{ item.title }}</span>
                    <span class="delete" @click="deleteItem(item)"></span>
                </li>
            </transition-group>
        </div>
        <transition>
            <p v-if="!pending.length">Time to chill! You have no tasks.</p>
        </transition>
        <!--form to add task-->
        <form @keydown.enter.prevent="">
            <input type="text" class="input-todo" v-bind:class="{ active: new_todo }"
            placeholder="Add More Tasks!" v-model="new_todo" v-on:keyup.enter="addTask">
        <div class="buttons button-add" v-bind:class="{ active: new_todo }" @click="addTask">+</div>
        </form>
        <!-- Complete task  items-->
        <template v-if="completed.length > 0 && showComplete">
            <transition-group name="todo-item" tag="ul" class="todo-list archived">
                <li v-for="(item) in completed" v-bind:key="item.title">
                    <input class="todo-checkbox" v-bind:id="'item_' + item.id" v-model="item.done" type="checkbox">
                    <label v-bind:for="'item_' + item.id"></label>
                    <span class="todo-text">{{ item.title }}</span>
                    <span class="delete" @click="deleteItem(item)"></span>
                </li>
            </transition-group>
        </template>
        <!--Buttons for Clear and Complete-->
        <div class="control-buttons">
            <button class="button button-secondary" v-if="completed.length > 0" @click="toggleShowComplete">
                <span v-if="!showComplete">Show</span><span v-else>Hide</span> 
                Complete
            </button>
            <button class="button button-secondary" v-if="todoList.length > 0" @click="clearAll">Clear All</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "ToDoList",
    components: "",
    props: {
        // msg: String 
    },
    data() {
        return {
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
    computed: {
        //filters not done items
        pending: function() {
            return this.todoList.filter(function(item) {return !item.done;})
        },
        //filters done items
        completed: function() {
            return this.todoList.filter(function(item) {return item.done;});
        },
    },
    methods: {
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

<style scoped></style>