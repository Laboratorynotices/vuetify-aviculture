<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Falkennest
        </v-list-item-title>
        <v-list-item-subtitle>
          das Hobbyzucht
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <div
        v-for="item in items"
        :key="item.title"
      >
        <navigation-element
          v-if="!item.items"
          :link-to="item.to"
          :text="item.title"
          :icon="item.action"
        />

        <v-list-group
          v-else
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator >
            <v-list-item-content >
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
            :to="child.to"
          >

            <v-list-item-title v-text="child.title" />
            <v-list-item-icon>
              <v-icon v-text="child.action" />
            </v-list-item-icon>

          </v-list-item>
        </v-list-group>
      </div>

    </v-list>

  </v-navigation-drawer>
</template>

<script>
import NavigationElement from '@/components/NavigationElement.vue'

export default {
  name: 'Navigation',
  props: {
    drawer: Boolean
  },
  data: () => ({
    items: [
      {
        action: 'mdi-home-variant',
        title: 'Startseite',
        to: '/'
      },
      {
        action: 'mdi-information',
        title: 'Über uns',
        to: '/about'
      },
      {
        action: 'mdi-bird',
        title: 'Kleine Küken',
        active: true,
        items: [
          {
            title: 'Vogelbestand',
            action: 'mdi-book-open-page-variant',
            to: '/bird-stock'
          },
          {
            title: 'Futter',
            action: 'mdi-bowl-mix',
            to: '/lining'
          },
          {
            title: 'Informationen',
            action: 'mdi-file-table',
            to: '/information'
          },
          {
            title: 'Fotos',
            action: 'mdi-camera',
            to: '/fotos'
          }
        ]
      },
      {
        action: 'mdi-map-search',
        title: 'Contact',
        to: '/contact'
      },
      {
        action: 'mdi-link-variant',
        title: 'Links',
        to: '/links'
      },
      {
        action: 'mdi-gavel',
        title: 'Impressum',
        to: '/impressum'
      }
    ],
    right: null
  }),
  components: {
    NavigationElement
  }
}

</script>
