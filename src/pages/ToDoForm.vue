<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-input"> What needs to be done? </label>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model="label"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDoForm",

  methods: {
    onSubmit() {
      // console.log("Label value: ", this.label);
      this.$emit("todo-added", this.label);
    },
  },

  data() {
    return {
      label: "",
    };
  },
});
</script>


