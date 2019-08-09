<template>
  <div class="todo-item">
    <!-- <span>{{todo.note}}</span> -->
    <input class="note" :value="todo.note" type="text" placeholder="Describe your task" v-on:keyup.enter="saveItem" />
    <input class="priority" :value="todo.priority" type="text" placeholder="Describe your task" v-on:keyup.enter="saveItem" />
    <button v-on:click="saveItem">OK</button>
    <button class="warning rounded" v-on:click="deleteItem">X</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  methods: {
    deleteItem: function () {
      console.log('deleteItem')
      if (confirm('Are you sure you want to remove this item?')) {
        this.$emit('remove', this.todo.id)
      }
    },
    saveItem: function () {
      // TODO, Ideally: Add validation.

      console.log('ToDoItem: saveItem')
    }
  },
  props: {
    todo: {
      type: Object
    },
    removeEvent: {
      type: Function
    }
  },
  data () {
    return {
      // Data goes here
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

.todo-item input.priority {
  width: 2em;
}

button {
  background-color: #234;
  color: #fff;
  font-size: 0.6rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}

button.warning {
  background-color: #ac0202;
}

button.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

</style>
