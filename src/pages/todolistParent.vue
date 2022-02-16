<template>
  <div class="q-pa-md">todolistParent</div>
  <ToDoForm @todo-added="addToDo" />
</template>

<script>
import { defineComponent } from "vue";
import ToDoForm from "./ToDoForm.vue";

export default defineComponent({
  name: "todolistParent",

  components: {
    ToDoForm,
  },

  methods: {
    addToDo(label) {
      console.log("To-do added:", label);
    },
  },
});
</script>


