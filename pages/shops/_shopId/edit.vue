<template>
  <div>
    <ShopNewHeader class="mt-10"/>
    <ShopEditForm class="mt-10"/>
  </div>
</template>
<script>
export default {
  created () {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login');
    } 
  }
}
</script>