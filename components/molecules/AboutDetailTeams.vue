<template>
  <div>
    <v-row justify="center">
      <div
        v-for="(avatar, index) in avatars"
        :key="index"
      >
        <v-avatar :size="avatarSize">
          <img :src="avatar">
        </v-avatar>
      </div>
    </v-row>
    <v-row justify="center">
      <div
        v-for="(name, index) in names"
        :key="`name-${index}`"
        :class="nameStyle"
        >
      {{ name }}
      </div>
    </v-row>
    <v-row justify="center">
      <div
        v-for="(socialMedia, index) in socialMedias"
        :key="`socialMedia-${index}`"
        :class="socialMediaStyle"
      >
        <div
          v-for="(links, index) in links"
          :key="`links-${index}`"
        >
          <a :href="links" target=”_blank”>
            {{ socialMedia }}
          </a>
        </div>
      </div>  
    </v-row>
    <v-row justify="center">
      <div
        v-for="(profile, index) in profiles"
        :key="`profile-${index}`"
        :class="profileStyle"
      >
      {{ profile }}
      </div> 
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    avatars: Object,
    names: String,
    socialMedias: String,
    links: Object,
    profiles: String,
  },
  computed: {
    avatarSize () {
      if (this.$vuetify.breakpoint.mdAndDown) return '60'
      return '75'
    },
    nameStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-subtitle-1 font-weight-bold mt-3'
      return 'text-h6 font-weight-bold mt-6'
    },
    socialMediaStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-body-2 text-decoration-underline font-weight-bold mt-n1 pb-3'
      return 'text-subtitle-2 text-decoration-underline font-weight-bold mt-n1 pb-3'
    },
    profileStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-caption'
      return 'text-caption'
    }
  }
}
</script>


