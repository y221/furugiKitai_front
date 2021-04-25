<template>
  <div class="mt-8">
    <v-row>
      <v-col cols="6" sm="2" md="2" class="mt-4">
        {{ columnName }}
      </v-col>
      <v-col cols="6" sm="1" md="2" class="mt-4 required-tag">
        <v-chip
          color="accent"
          text-color="white"
          v-if="required"
          label
          small
        >
          <strong>必須</strong>
        </v-chip>
      </v-col>
      <v-col cols="12" sm="8" md="7">
        <v-textarea
          :label="label"
          outlined
          solo
          flat
          rows="5"
          auto-grow
        ></v-textarea>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  props: {
    columnName: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    
  }
}
</script>
<style>
.required-tag{
  text-align: right;
}
</style>