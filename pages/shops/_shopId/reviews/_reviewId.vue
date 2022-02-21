<template>
  <div class="fill-height">
    <ReviewShopInformation />
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