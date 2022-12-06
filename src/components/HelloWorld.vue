<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <span>Hey You,</span> this is your Online Garden.
        </h1>

        <p class="subheading font-weight-regular">
          The app to take care of your plants.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>

<style>
h1{
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
h1 span {
  color: orange;
}
</style>