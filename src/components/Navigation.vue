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
              <v-icon v-text="item.action" />
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
        title: 'Home',
        to: '/'
      },
      {
        action: 'mdi-information',
        title: 'About',
        to: '/about'
      },
      {
        action: 'mdi-silverware-fork-knife',
        title: 'Dining',
        active: true,
        items: [
          {
            title: 'Breakfast & brunch',
            to: '/about'
          },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      },
      {
        action: 'mdi-school',
        items: [{ title: 'List Item' }],
        title: 'Education'
      },
      {
        action: 'mdi-run',
        items: [{ title: 'List Item' }],
        title: 'Family'
      },
      {
        action: 'mdi-bottle-tonic-plus',
        items: [{ title: 'List Item' }],
        title: 'Health'
      },
      {
        action: 'mdi-content-cut',
        items: [{ title: 'List Item' }],
        title: 'Office'
      },
      {
        action: 'mdi-tag',
        items: [{ title: 'List Item' }],
        title: 'Promotions'
      }
    ],
    right: null
  }),
  components: {
    NavigationElement
  }
}

</script>
