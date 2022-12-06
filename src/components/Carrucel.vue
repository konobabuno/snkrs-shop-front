<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="550px">
      <template v-slot:activator="{ on, attrs }">
      </template>
      <v-card max-width="600">
        <v-carousel
          :continuous="false"
          hide-delimiter-background
          light
          delimiter-icon="mdi-circle"
          class="carrucelImg"
        >

          <v-btn
            color="ligth-gray"
            text
            fab
            small
            @click="dialog = false"
            class="Medio cancelar"
          >
            <v-icon dense color="#808080">mdi-close-circle</v-icon>
          </v-btn>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "Carrucel",
  data() {
    return {
      dialog: false,
      items: [],
    };
  },
  components: {
    Gallery,
  },
};
</script>
