<template>
  <div class="name-animation">
    <br>
    <img
      src="../assets/profile.jpg"
      alt="Profile picture of Dot Dager"
      class="profile-image"
      max-height="200"
      max-width="200"
      cover
    />
    <h1 class="animated-name">Dot Dager</h1>
    <p class="bio"><span class="highlighted-text">{{ bio }}</span></p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const profilePicture = "/profile.jpg";
const bio = ref("");
const fullBio =
  "I'm a content creator passionate about programming, cats, guitars, pickles, and philosophy.";

const animateBio = () => {
  let i = 0;
  const animationInterval = setInterval(() => {
    bio.value = fullBio.slice(0, i);
    i++;
    if (i > fullBio.length) {
      clearInterval(animationInterval);
      // Reinicia la animación después de una breve pausa
      setTimeout(() => animateBio(), 1800);
    }
  }, 50);
};

// Inicia la animación cuando el componente se monta
animateBio();
</script>

<style scoped>
.name-animation {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
}

.profile-image {
  margin-top: 3.2rem;
  max-width: 22%;
  max-height: 22%;
  border-radius: 50%;
  border: 4px solid #253007;
  margin-bottom: 1rem;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
}

.profile-image:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.animated-name {
  font-size: 3rem;
  color: #253007;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: transform 0.5s ease-in-out, color 0.5s ease-in-out;
}

.animated-name:hover {
  transform: scale(1.1);
  color: #00796b;
}

.bio {
  font-weight: bold;
  font-size: 0.82rem;
  color: #333;
  text-align: center;
  line-height: 1.6;
  max-width: 600px;
}

.highlighted-text {
  
  color: #314904; /* Color del texto resaltado */
  font-weight:inherit;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>
