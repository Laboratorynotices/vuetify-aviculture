<template>
  <v-app id="inspire">
    <navigation
      :drawer="drawer"
    />

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        v-model="drawer"
      >
        Application
      </v-toolbar-title>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    drawer: true
  })
}
</script>
