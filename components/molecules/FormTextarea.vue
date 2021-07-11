<template>
  <div>
    <v-row :class="formLine">
      <v-col
        cols="auto"
        lg="2"
        class="d-flex align-center"
        :class="columnNameStyle"
      >
        {{ columnName }}
      </v-col>
      <v-col
        cols="1"
        class="d-flex align-center"
        :class="requiredStyle"
      >
        <v-sheet
          color="accent"
          rounded
          height="19"
          width="40"
          v-if="required"
        >
          <div class="white--text">
            必須
          </div>
        </v-sheet>  
      </v-col>
      <v-col
        cols="12"
        lg="9"
        :class="textFieldStyle"
      >
        <v-textarea
          v-model="value"
          :label="label"
          :id="id"
          outlined
          solo
          flat
          rows="5"
          auto-grow
          @change="changed()"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-divider class="mx-auto" :width="dividerWidth"></v-divider>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: ''
  }),
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
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    changed() {
      this.$emit("change", this.value, this.id);
    }
  },
  computed: {
    formLine () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'px-1 mt-3'
      return 'mx-2 pt-3'
    },
    columnNameStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-button font-weight-bold px-2 ml-1'
      return 'ml-3 text-body-2 font-weight-bold'      
    },
    requiredStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'text-caption font-weight-bold text-center mx-n4'
      return 'text-caption font-weight-bold text-center mx-2'
    },
    textFieldStyle () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-n5 mb-n1'
      return 'mx-n8 mt-3 mb-n3'       
    },
    dividerWidth () {
      if (this.$vuetify.breakpoint.mdAndDown) return '100%'
      return '95%'
    }
  }
}
</script>