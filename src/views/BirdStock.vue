<template>
  <div class="contact">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>Vogelbestand</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card
            class="mx-auto text-center"
          >
            <h1>
              Falken
            </h1>

            <v-card-text>
              <v-container>
                <v-row
                  class="d-flex justify-space-between"
                >
                <v-col
                  sm="6"
                  md="4"
                  v-for="falcon in falcons"
                  :key="falcon.title"
                >
                  <v-card>
                    <v-img
                      :src="falcon.img"
                      height="200px"
                    />

                    <v-card-title>
                      {{ falcon.title }}
                    </v-card-title>

                  </v-card>
                </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card
            class="mx-auto text-center"
          >
            <h1>
              Eulen
            </h1>

            <v-card-text>
              <v-container>
                <v-row
                  class="d-flex justify-space-between"
                >
                <v-col
                  sm="6"
                  md="4"
                  v-for="owl in owls"
                  :key="owl.title"
                >
                  <v-card>
                    <v-img
                      :src="owl.img"
                      height="200px"
                    />

                    <v-card-title>
                      {{ owl.title }}
                    </v-card-title>

                  </v-card>
                </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BirdStock',

  data: () => ({
    falcons: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amur_Falcon_%28Falco_amurensis%29_male_%2816794543415%29.jpg/300px-Amur_Falcon_%28Falco_amurensis%29_male_%2816794543415%29.jpg',
        title: 'Amurfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Eurasian_Hobby_%2814574008925%29_%28cropped%29.jpg/300px-Eurasian_Hobby_%2814574008925%29_%28cropped%29.jpg',
        title: 'Baumfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Eleonorenfalke1.jpg/300px-Eleonorenfalke1.jpg',
        title: 'Eleonorenfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Falco-rusticolus.jpg/300px-Falco-rusticolus.jpg',
        title: 'Gerfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brown_falcon.jpg/300px-Brown_falcon.jpg',
        title: 'Habichtfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lanner_falcon%2C_Falco_biarmicus%2C_at_Kgalagadi_Transfrontier_Park%2C_Northern_Cape%2C_South_Africa_%2834415574732%29.jpg/300px-Lanner_falcon%2C_Falco_biarmicus%2C_at_Kgalagadi_Transfrontier_Park%2C_Northern_Cape%2C_South_Africa_%2834415574732%29.jpg',
        title: 'Lannerfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Nz_falcon.JPG/300px-Nz_falcon.JPG',
        title: 'Maorifalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Male_Red-footed_Falcon_and_Lunch_%2819368098472%29.jpg/300px-Male_Red-footed_Falcon_and_Lunch_%2819368098472%29.jpg',
        title: 'Rotfußfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Falco_araea_Seychelles_Kestrel_side_views.jpg/300px-Falco_araea_Seychelles_Kestrel_side_views.jpg',
        title: 'Seychellenfalke'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Faucon_pelerin_7_mai.jpg/300px-Faucon_pelerin_7_mai.jpg',
        title: 'Wanderfalke'
      }
    ],
    owls: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/The_Barking_Owl.jpg/300px-The_Barking_Owl.jpg',
        title: 'Kläfferkauz'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mochuelo_Com%C3%BAn_%28_Athene_noctua_%29%281%29.jpg/267px-Mochuelo_Com%C3%BAn_%28_Athene_noctua_%29%281%29.jpg',
        title: 'Steinkäuze'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aegolius-funereus-001.jpg/266px-Aegolius-funereus-001.jpg',
        title: 'Raufußkauz'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Surnia_ulula_Tripsdrill_2020_10_27.jpg/285px-Surnia_ulula_Tripsdrill_2020_10_27.jpg',
        title: 'Sperbereule'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Uhu-muc.jpg/300px-Uhu-muc.jpg',
        title: 'Uhu'
      }
    ]
  })
}
</script>
