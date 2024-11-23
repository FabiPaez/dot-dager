<template>
  <div class="about-me">
    <br>
    <h2>About Me</h2>
    <br>
    <div class="about-container">
      <img 
        src="../assets/gustos.jpg" 
        alt="About Me" 
        class="about-image" 
      />
      <div class="about-description">
        <p>
          Hi, I'm Dot Dager. I'm a content creator passionate about:
        </p>
        <ul>
          <li>Programming: Creating innovative solutions and exploring new technologies.</li>
          <li>Cats: Their independence and quirky behavior inspire creativity.</li>
          <li>Guitars: Music is a way to express emotions and tell stories.</li>
          <li>Pickles: A love for unique flavors and culinary adventures.</li>
          <li>Philosophy: Exploring deep questions about existence and meaning.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-me {
  padding: 2rem;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  color: #253007;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.about-image {
  max-width: 250px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.about-description {
  max-width: 600px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.about-description ul {
  list-style-type: disc;
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.about-description li {
  margin-bottom: 0.5rem;
}

#mañoso{
  color: rgb(255, 221, 255);
  display: inline;
}
</style>
