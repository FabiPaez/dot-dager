<template>
  <div class="projects-container">
    <div class="projects">
      <br />
      <br />
      <h2>My Projects</h2>
      <br />
      <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        class="carousel"
        height="300"
      >
        <template v-slot:prev="{ props }">
          <v-btn width="50px" color="#ccb800" variant="outlined" icon="fas fa-arrow-circle-left" @click="props.onClick"
            ></v-btn
          >
        </template>
        <template v-slot:next="{ props }">
         <v-btn width="50px" color="purple" variant="outlined" icon="fas fa-arrow-circle-right" @click="props.onClick"
            ></v-btn
          >
        </template>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <img :src="item.src" alt="Project image" class="carousel-image" />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    src: "https://i.ytimg.com/vi/q8ttiG4yih0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDsA_AaJ8eGNK_HNRfNigSj_oMfEQ",
  },
  {
    src: "https://i.ytimg.com/vi/2wfahAD_kWQ/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYfyAlKDUwDw==&rs=AOn4CLDKdEOLmMTrBBM-cR7kRbAyKNujoA",
  },
  {
    src: "https://i.ytimg.com/vi/OnNW8dbHFno/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCJHXzrJz3HHXacPTe_aPV8qLl8IQ",
  },
];
</script>

<style scoped>
/* Contenedor principal */
.projects-container {
  display: flex;
  justify-content: center;
  height: 100vh; /* Altura completa de la pantalla */
  padding: 0 2rem;
}

/* Contenedor del carrusel */
.projects {
  text-align: center;
  width: 35vw; /* Carrusel ocupa el 35% del ancho del viewport */
  max-width: 800px; /* Limita el tamaño máximo del carrusel */
}

/* Carrusel */
.carousel {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Imágenes del carrusel */
.carousel-image {
  height: 100%;
  width: 100%; /* Asegura que la imagen se ajuste al ancho del contenedor */
  border-radius: 10px; /* Bordes redondeados */
}

/* Media queries para dispositivos pequeños */
@media (max-width: 768px) {
  .projects {
    width: 90%; /* En pantallas pequeñas, ocupa casi todo el ancho */
  }

  .carousel-image {
    aspect-ratio: 4 / 3; /* Cambia a proporción más cuadrada */
  }
}
</style>
