<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="logo" @click="scrollToSection('home')">My Portfolio</h1>
      <ul class="nav-links">
        <li>
          <a href="#home" class="nav-link" @click="scrollToSection('home')">Home</a>
        </li>
        <li>
          <a href="#about" class="nav-link" @click="scrollToSection('about')">About Me</a>
        </li>
        <li>
          <a href="#projects" class="nav-link" @click="scrollToSection('projects')">Projects</a>
        </li>
        <li>
          <a href="#contact" class="nav-link" @click="scrollToSection('contact')">Contact</a>
        </li>
        <!-- Menú desplegable -->
        <li class="dropdown">
          <span class="nav-link dropdown-toggle">SOCIAL LINKS</span>
          <ul class="dropdown-menu">
            <li><a href="https://youtube.com/@DotDager" target="_blank">YT Principal</a></li>
            <li><a href="https://instagram.com/dager.32" target="_blank">Instagram</a></li>
            <li><a href="https://tiktok.com/@elantrodedager" target="_blank">TikTok</a></li>
            <li><a href="https://youtube.com/@DagerLive" target="_blank">YT Clips</a></li>
            <li><a href="https://discord.gg/4NFk6TamAB" target="_blank">DISCORD ❤</a></li>
            <li><a href="https://github.com/MarianoVilla" target="_blank">GitHub</a></li>
            <li><a href="https://youtube.com/c/DagerMusic" target="_blank">YT Musiquita</a></li>
            <li><a href="https://twitch.tv/dagerxiv" target="_blank">Twitch</a></li>
            <li><a href="https://open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1" target="_blank">Spotify</a></li>
            <li><a href="https://twitter.com/Dager_32" target="_blank">Twitter</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #d3ff35;
  transition: color 0.3s ease;
}
.logo:hover {
  color: #ccb800; /* Color al pasar el cursor por encima */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #f39c12;
}

/* Dropdown Styles */
.dropdown {
  margin-right: auto;
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;
}

.dropdown-toggle:hover {
  color: #f39c12;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 8000px; /* Aumenta el ancho del menú */
  background-color: #333;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0; /* Elimina padding extra */
  list-style: none;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 12px 16px; /* Aumenta el padding para más espacio */
  transition: background-color 0.3s ease;
  text-align: left; /* Asegura que el texto quede alineado a la izquierda */
  width: 100%; /* Ocupa toda la fila */
}

.dropdown-menu li a:hover {
  background-color: #f39c12;
}

/* Show the dropdown on hover */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
  .dropdown-menu {
    position: static;
    box-shadow: none;
  }
}
</style>