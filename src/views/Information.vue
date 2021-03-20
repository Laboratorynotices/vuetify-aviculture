<template>
  <div class="contact">
    <v-container class="mb-12">
      <v-row class="text-center">
        <v-col cols="12">
          <h1>Informationen</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card>
            <v-card-title>
              Vogelart
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Suche"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="birds"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Körperlänge (cm)', value: 'bodyLength' },
      { text: 'Geschlechts-unterschiede', value: 'genderDifferences' },
      { text: 'Eier', value: 'eggs' },
      { text: 'Brutdauer (Tag)', value: 'incubation' },
      { text: 'Nestlingszeit (Woche)', value: 'nestling' },
      { text: 'Geschlechtsreife (Monat)', value: 'puberty' },
      { text: 'Nistkasten (LxBxH)', value: 'nestingBox' },
      { text: 'Einflugsloch (cm)', value: 'entryHole' },
      { text: 'Fußring (mm)', value: 'anklet' }
    ],
    birds: [
      {
        name: 'Plattschweifsittiche'
      },
      {
        name: 'Stanleysittich',
        bodyLength: '25',
        genderDifferences: 'ja',
        eggs: '3-7',
        incubation: '20',
        nestling: '4-5',
        puberty: '12-18',
        nestingBox: '25x25x50',
        entryHole: '6',
        anklet: '5,0'
      },
      {
        name: 'Pennantsittich',
        bodyLength: '36',
        genderDifferences: 'nein',
        eggs: '4-6',
        incubation: '20',
        nestling: '5',
        puberty: '24',
        nestingBox: '27x27x60',
        entryHole: '8',
        anklet: '6,0'
      },
      {
        name: 'Blaßkopfrosella',
        bodyLength: '30',
        genderDifferences: 'nein',
        eggs: '3-5',
        incubation: '20',
        nestling: '5',
        puberty: '12',
        nestingBox: '25x25x60',
        entryHole: '8',
        anklet: '5,5'
      },
      {
        name: 'Rosellasittich',
        bodyLength: '32',
        genderDifferences: 'nein',
        eggs: '5-7',
        incubation: '20',
        nestling: '5',
        puberty: '12',
        nestingBox: '25x25x60',
        entryHole: '7',
        anklet: '5,5'
      },
      {
        name: 'Singsittiche'
      },
      {
        name: 'Blutbauchsittich',
        bodyLength: '28',
        genderDifferences: 'ja',
        eggs: '4-7',
        incubation: '21',
        nestling: '5',
        puberty: '6-9',
        nestingBox: '20x20x60',
        entryHole: '7',
        anklet: '5,5'
      },
      {
        name: 'Vielfarbensittich',
        bodyLength: '27',
        genderDifferences: 'ja',
        eggs: '4-7',
        incubation: '21',
        nestling: '5',
        puberty: '6-9',
        nestingBox: '20x20x35',
        entryHole: '7',
        anklet: '4,5'
      },
      {
        name: 'Singsittich',
        bodyLength: '28',
        genderDifferences: 'ja',
        eggs: '4-7',
        incubation: '17-20',
        nestling: '4-5',
        puberty: '6-9',
        nestingBox: '25x25x35',
        entryHole: '4',
        anklet: '4,5'
      },
      {
        name: 'Grassittiche'
      },
      {
        name: 'Schmucksittich',
        bodyLength: '23',
        genderDifferences: 'ja',
        eggs: '4-6',
        incubation: '18',
        nestling: '4',
        puberty: '8-12',
        nestingBox: '20x20x30',
        entryHole: '6',
        anklet: '4,0'
      },
      {
        name: 'Feinsittich',
        bodyLength: '22',
        genderDifferences: 'ja',
        eggs: '4-6',
        incubation: '18',
        nestling: '4',
        puberty: '8-12',
        nestingBox: '20x20x50',
        entryHole: '6',
        anklet: '4,0'
      },
      {
        name: 'Schönsittich',
        bodyLength: '20',
        genderDifferences: 'ja',
        eggs: '4-6',
        incubation: '18',
        nestling: '4',
        puberty: '8-12',
        nestingBox: '20x20x50',
        entryHole: '5',
        anklet: '4,0'
      },
      {
        name: 'Glanzsittich',
        bodyLength: '20',
        genderDifferences: 'ja',
        eggs: '3-5',
        incubation: '18',
        nestling: '4',
        puberty: '6-9',
        nestingBox: '15x15x30',
        entryHole: '5',
        anklet: '4,0'
      }
    ]
  })
}
</script>
