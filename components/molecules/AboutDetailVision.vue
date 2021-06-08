<template>
  <div>
    <div :class="subTitle">
      フルギキタイでやりたいこと
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    subTitle () {
      if (this.$vuetify.breakpoint.xs) return 'accent--text text-h5 font-weight-bold'
      return 'accent--text text-h5 font-weight-bold mt-10'
    },
    header () {
      if (this.$vuetify.breakpoint.xs) return 'font-weight-bold text-h5 mx-2 my-5 pt-5'
      return 'font-weight-bold text-sm-h4 mx-4 my-10'
    }
  }
}
</script>


