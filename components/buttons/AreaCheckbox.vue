<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col v-if="!this.$vuetify.breakpoint.xs" md="1"></v-col>
        <v-col
          cols="9"
          md="10"
          :align="this.$vuetify.breakpoint.xs ? '' : 'center'"
          :class="this.$vuetify.breakpoint.xs ? 'font-weight-bold body-2 pt-5' : 'font-weight-bold'"
        >
          エリア絞り込み
        </v-col>
        <v-col cols="3" md="1">
          <v-btn text @click="closeDialog()">✕</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider class="mt-1"></v-divider>
    <v-card-text style="height: 500px;">
      <template v-for="prefecture in prefectures">
        <v-row class="mt-2">
          <v-col
            md="3"
            cols="12"
          >
            <p :class="$vuetify.breakpoint.xs ? 'body-2 mb-0 font-weight-bold' : 'ml-4 body-1 font-weight-bold'">
              {{ prefecture.prefecture }}
            </p>
          </v-col>
          <v-col
            md="9"
            cols="12"
          >
            <v-row class="pr-5">
              <v-checkbox
                v-for="area in prefecture.areas"
                :key="area.id"
                :class="$vuetify.breakpoint.xs ? 'ml-2 mr-4 mt-2' :'ml-4 mt-2'"
                :label="area.name"
                :value="area.id"
                v-model="selected"
              ></v-checkbox>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="mt-2"></v-divider>
      </template>
    </v-card-text>
    <v-card-actions>
      <v-col align="center">
        <v-btn
          color="primary"
          depressed
          rounded
          class="font-weight-bold"
          @click="selectAreaCompleted()"
        >
          このエリアで絞り込む
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>
<script>
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  data () {
    return {
      genderSelected: [],
      dialog: false,
    }
  },
  props: {
    prefectures: {
      type: Array,
      required: true,
    },
    selectedAreaIds: {
      type: Array,
      required: true,
    }
  },
  computed: {
    selected: {
      get: function() { return this.selectedAreaIds },
      set: function(value) { this.$emit('update:selectedAreaIds', value) }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    },
    selectAreaCompleted() {
      this.$emit('closeDialog')
      this.$emit('searchShops')
    },
  }
}
</script>