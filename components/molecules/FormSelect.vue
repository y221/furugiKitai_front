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
        <v-select
          v-model="value"
          :label="label"
          :id="id"
          :items="items"
          item-text="text"
          item-value="value"
          outlined
          solo
          flat
          rows="5"
          auto-grow
          @change="changed()"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: '',
  }),
  props: {
    columnName: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    changed() {
      this.$emit("change", this.value, this.id);
    }
  }
}
</script>
<style>
.required-tag{
  text-align: right;
}
</style>