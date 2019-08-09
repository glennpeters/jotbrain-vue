<template>
  <div class="todo-item">
    <!-- <span>{{todo.note}}</span> -->
    <input :value="todo.note" type="text" />
    <button :on="saveItem">OK</button>
    <button class="warning" :on="deleteItem">X</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  methods: {
    deleteItem: function () {
      // vm.$emit('test', 'hi');
      console.log('deleteItem')
    },
    saveItem: function () {
      console.log('saveItem')
    }
  },
  props: {
    todo: {
      type: Object
    },
    itemID: {
      type: String,
      default: ''
      // required: true
    },
    itemText: {
      type: String,
      default: 'Unnamed item'
      // required: true
    },
    priority: {
      type: Number,
      default: 0
      // required: true
    }
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.todo-item input {
  width: 30em;
}

button {
  background-color: #234;
  color: #fff;
  font-size: 0.6rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
}

button.warning {
  background-color: #ac0202;
}

</style>
