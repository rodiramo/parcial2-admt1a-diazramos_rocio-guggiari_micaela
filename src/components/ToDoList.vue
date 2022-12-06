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
<style>
.todo-wrapper{
    background-color: #FF8A01;
    width: 30%;
    max-width: 100%;
    margin: 20px auto 40px;
    color: #fff;
    border-radius: 3rem;
    padding: 40px 20px;
    overflow: hidden;
    position: relative;
}
form label{
    display: block;
    text-align: center;
    font-size: 1.2em;
}
.button, input, textarea, select {
    line-height: 2em;
    border-radius: 2rem;
    border: 0;
    display: inline-block;
    margin: 20px 0;
    padding: 0.2em 1em;
    font-size: 1em;
}
input[type='text'] {
    min-width: 80%;
    transition: all ease-in 0.25s;
}
input:focus{
    outline: none;
}
textarea:focus{
    outline: none;
}
input::placeholder{
    color: #024F4E;
    font-style: italic;
}
textarea::placeholder{
    color: #024F4E;
    font-style: italic;
}
.button{
    text-align: center;
    font-weight: bold; 
    cursor: pointer;
    border-style: solid;
}
.button-plant-add{
    float: right;
    background-color: var(--accent-color);
    transition: all 200ms ;
}
.button-plant-add:hover{
    color: var(--white);
    background-color: var(--dark-color);
}
.button-add {
    border: 2px solid #fff;
    border-radius: 2rem;
    background-color: #e99b4d9f;
    color: #ffff;
    pointer-events: none;
    transition: all ease-in 0.25s;
    font-size: 2.2em;
    line-height: 0.5em;
    padding: 0.3em 0.3em;
    float: right;
}
.button-add.active {
    background: var(--accent-color);
    pointer-events: visible;
}

.button-add.active:hover {
    background: var(--sec-color);
}

.button-add:active {
    transform: scale(0.95);
}

.control-buttons {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
}

.button-secondary {
    display: inline-block;
    position: relative;
    border: 0;
    margin: -10px 10px;
}

.button-secondary:after {
    position: absolute;
    content: '';
    width: 0;
    height: 1.5px;
    background-color: var(--sec-color);
    bottom: 0px;
    left: 0;
    transition: all ease-in 0.25s;
}

.button-secondary:hover:after {
    width: 100%;
}

ul.todo-list {
    padding: 0;
    margin-bottom: 30px;
}

ul.todo-list li {
    position: relative;
    list-style-type: none;
    display: block;
    margin: 10px 0;
    border: none;
    cursor: default;
    border-bottom: 1px solid #fff;
    border-radius: 0.25rem;
    padding: 12px 38px 12px 49px;
    overflow: hidden;
}

ul.todo-list li:hover {
    border-top: 1px solid #fff;
    background-color: #ff6b019f;
}

ul.todo-list.archived li {
    background-color: #ff56016c;
}

.todo-text {
    position: relative;
    display: inline-block;
    padding: 0 0.5em;
}

ul.todo-list li .delete {
    position: absolute;
    height: 100%;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    width: 0;
    background-color: var(--main-color);
    color: #fff;
    transition: all ease-in 0.25s;
}

ul.todo-list li .delete:after {
    position: absolute;
    content: 'x';
    width: 10px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    transition: all ease-in 0.25s;
}

ul.todo-list li:hover .delete {
    width: 44px;
    border-radius: 2rem 0 0rem 2rem;
    opacity: 1;
}

ul.todo-list li:hover .delete:after {
    transform: translate(-50%, -50%) scale(1);
}

.todo-checkbox {
    position: absolute;
    display: none;
}

.todo-checkbox+label {
    position: absolute;
    cursor: pointer;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    border-radius: 2rem;
    background-color: #fff;
}

.todo-checkbox:checked+label:after {
    position: absolute;
    content: '';
    top: 30%;
    left: 50%;
    height: 3px;
    width: 6px;
    border: solid #052323;
    border-width: 0 0 2px 2px;
    transform-origin: center center;
    transform: rotate(-45deg) translate(-50%, -50%);
}

.todo-checkbox:checked+label:after {
    display: block;
}

.todo-checkbox:checked~.todo-text {
    color: var(--dark-color);
    text-decoration: line-through;
}

.todo-item-enter-active,
.todo-item-leave-active {
    transition: opacity ease 0.25s, transform ease-in-out 0.3s;
    transform-origin: left center;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}
</style>