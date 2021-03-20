<template>
  <div class="about">
    <v-container class="text-center mb-12">
      <v-row>
        <v-col cols="12">
          <h1>Über uns</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.
            Abgeschieden wohnen sie in Buchstabhausen an.
          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-space-between">
        <v-col sm="6" md="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://picsum.photos/id/1005/300/200"
              height="200px"
            />

            <v-card-title>
              Eine wunderbare Heiterkeit
            </v-card-title>

            <v-card-subtitle>
              hat meine ganze Seele eingenommen.
            </v-card-subtitle>

          </v-card>
        </v-col>
        <v-col sm="6" md="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://picsum.photos/id/1011/300/200"
              height="200px"
            />

            <v-card-title>
              den süßen Frühlingsmorgen
            </v-card-title>

            <v-card-subtitle>
              ich mit ganzem Herzen genieße.
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col sm="6" md="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://picsum.photos/id/1012/300/200"
              height="200px"
            />

            <v-card-title>
              Ich bin allein und freue mich
            </v-card-title>

            <v-card-subtitle>
              meines Lebens in dieser Gegend.
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col sm="6" md="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://picsum.photos/id/1014/300/200"
              height="200px"
            />

            <v-card-title>
              Die für solche Seelen
            </v-card-title>

            <v-card-subtitle>
              geschaffen ist wie die meine.
            </v-card-subtitle>

          </v-card>
        </v-col>
        <v-col sm="6" md="4">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://picsum.photos/id/219/300/200"
              height="200px"
            />

            <v-card-title>
              Ich bin so glücklich
            </v-card-title>

            <v-card-subtitle>
              mein Bester.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte.
            Abgeschieden wohnen sie in Buchstabhausen an.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img
            src="https://picsum.photos/id/164/400/300"
            class="my-3"
            contain
            height="300"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1>Ich könnte jetzt nicht zeichnen</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  })
}
</script>
