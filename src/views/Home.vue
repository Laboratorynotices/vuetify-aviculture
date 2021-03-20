<template>
  <div class="home">
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <h1>Herzlich Willkommen!</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img
            src="https://picsum.photos/id/130/300/200"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.</p>
          <p>
            Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.
            Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.
            Es ist ein paradiesmatisches Land.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
