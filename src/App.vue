<template>
  <v-app id="inspire">
    <navigation
      :drawer="drawer"
    />

    <v-app-bar
      app
      fixed
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <transition name="fade">
        <v-app-bar-title
          v-model="drawer"
          v-show="!drawer"
        >
          Falkennest
        </v-app-bar-title>
      </transition>

      <v-spacer></v-spacer>

      <v-btn
        icon
        href="https://www.google.com/"
        target="_blank"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <!-- Scroll to Top Button-->
    <scroll-to-top-button />
  </v-app>

</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

export default {
  name: 'App',

  components: {
    Navigation,
    ScrollToTopButton
  },

  data: () => ({
    drawer: true
  })
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
