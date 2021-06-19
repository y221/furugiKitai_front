<template>
  <div>
    <div v-for="error in errors">
      <p class="red--text mb-0">{{ error[0] }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    errors: Object
  }
}
</script>