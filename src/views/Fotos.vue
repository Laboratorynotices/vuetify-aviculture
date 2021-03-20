<template>
  <div class="about">
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <h1>Fotos</h1>
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
        src: 'https://picsum.photos/id/1024/600/400'
      },
      {
        src: 'https://picsum.photos/id/130/600/400'
      },
      {
        src: 'https://picsum.photos/id/244/600/400'
      },
      {
        src: 'https://picsum.photos/id/258/600/400'
      },
      {
        src: 'https://picsum.photos/id/269/600/400'
      },
      {
        src: 'https://picsum.photos/id/275/600/400'
      },
      {
        src: 'https://picsum.photos/id/538/600/400'
      },
      {
        src: 'https://picsum.photos/id/611/600/400'
      }
    ]
  })
}
</script>
