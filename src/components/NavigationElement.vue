<template>
  <v-list-item
    link
    :to="linkTo"
  >
    <v-list-item-icon>
      <v-icon
        v-text="icon"
      />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="text" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'FirstLevelMenuElement',
  props: {
    linkTo: String,
    text: String,
    icon: String
  }
}
</script>
