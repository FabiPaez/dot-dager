<template>
  <footer class="footer">
    <div class="social-links">
      <a
        v-for="(link, index) in socialLinks"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-icon"
        aria-label="Social media link"
      >
        <i :class="link.icon"></i>
      </a>
    </div>
    <p class="footer-text">
      &copy; {{ new Date().getFullYear() }} Dot Dager | All Rights Reserved
    </p>
  </footer>
</template>

<script setup>
const socialLinks = [
  { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@DotDager' },
  { icon: 'fab fa-twitch', url: 'https://www.twitch.tv/dagerxiv' },
  { icon: 'fab fa-instagram', url: 'https://www.instagram.com/dager.32' },
  { icon: 'fab fa-discord', url: 'https://discord.com/invite/2NessfQFvY' },
  { icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@elantrodedager' },
  { icon: 'fab fa-reddit', url: 'https://www.reddit.com/user/DagerDotCSV' },
];
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #121212;
  color: #ffffff;
  text-align: center;
  padding: 0.1rem;
}


.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0.2rem 0;
}

.social-icon {
  color: #ffffff;
  font-size: 1.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon:hover {
  color: #4caf50;
  transform: scale(1.2);
}

.footer-text {
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .social-links {
    gap: 1rem;
  }

  .social-icon {
    font-size: 1.5rem;
  }

  .footer-text {
    font-size: 0.8rem;
  }
}
</style>
