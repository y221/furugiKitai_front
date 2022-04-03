<template>
  <div>
    <ShopNewHeader class="mt-10"/>
    <ShopEditForm class="mt-10"/>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '古着屋編集'
    }
  },
  created () {
    if (!this.$auth.loggedIn) {
      this.$router.push('/login');
    } 
  }
}
</script>