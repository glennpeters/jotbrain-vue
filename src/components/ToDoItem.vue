<template>
  <div class="todo-item">
    <h3>Frogs</h3>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  methods: {
    deleteItem: function () {
      // vm.$emit('test', 'hi');
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
</style>
