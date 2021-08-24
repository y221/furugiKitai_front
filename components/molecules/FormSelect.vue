<template>
  <div>
    <v-row :class="formLine">
      <v-col
        cols="auto"
        lg="2"
        class="d-flex align-center text-body-2 font-weight-bold"
      >
        {{ columnName }}
      </v-col>
      <v-col
        cols="auto"  
        lg="1"
        class="d-flex align-center text-caption font-weight-bold text-center"
        :class="requireTag"
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
        :class="textSelect"
      >
        <v-select
          class="font-size-input"
          v-model="value"
          :label="label"
          :id="id"
          :items="items"
          item-text="prefecture"
          item-value="id"
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
    },
    default:{
      type: [String, Number],
      required: false,
      default: ''
    }
  },
  watch: {
    default: {
      handler: function(newVal) {
        this.value = newVal;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    changed() {
      this.$emit("change", this.value, this.id);
    }
  },
  computed: {
    formLine () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-1'
    },
    requireTag () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mx-n4'
    },
    textSelect () {
      if (this.$vuetify.breakpoint.mdAndDown) return 'mt-n3 mb-n2'
      return 'mt-7'
    }
  }
}
</script>