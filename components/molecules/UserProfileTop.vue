<template>
    <div class="user-header">
      <div class="user-header_header">
        <v-btn
          text
          to="/"
        >
          プロフィール編集
        </v-btn>
      </div>
      <div class="user-header_content">
        <v-avatar class="user-avatar" size="80px">
          <v-img
            :alt="user"
            :src="src"
          ></v-img>
        </v-avatar>
        <p class="text-h5 ml-10 mb-0 font-weight-bold user-name">{{ user }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.user-header_header {
  display: flex;
  justify-content: flex-end;
}
.user-header_content {
  padding: 0px 0px 24px 24px;
  display: flex;
}
.user-avatar {
  width: 120px;
}
.user-name {
  display: flex;
  align-items: center;
}
</style>