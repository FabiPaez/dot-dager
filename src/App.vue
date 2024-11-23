<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <section id="home">       
        <NameAnimation />
      </section>
      <section id="about" class="section">
        <AboutMe />
      </section>
      <section id="projects" class="section">
        <Projects />
      </section>
      <section id="contact" class="section">
        <Contact />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import NameAnimation from './components/NameAnimation.vue';
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
/* Fondo animado */
.app-container {
  min-height: 100vh;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1, #fad0c4);
  background-size: 300% 300%;
  animation: gradient-animation 10s ease infinite;
}

/* Ajuste global para evitar superposición del navbar y footer */
.main-content {
  margin-top: 60px; /* Altura fija del navbar */
  margin-bottom: 60px; /* Altura fija del footer */
}


.section {
  padding: 40px; /* Espaciado interno en cada sección */
  min-height: calc(100vh - 140px); /* Altura total menos navbar y footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Animación de gradiente */
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .section {
    padding: 20px 10px;
  }
}
</style>
