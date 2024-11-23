<template>
  <div class="contact-container">
    <h2>Contact Me</h2>
    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="row">

      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      </div>
      <div class="form-message">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  console.log('Form Submitted:', { name: name.value, email: email.value, message: message.value });
  alert('Message sent!');
};
</script>

<style scoped>
.contact-container {
  max-width: 800px; /* Asegura un tamaño máximo */
  width: 90%; /* Ocupa el 90% del ancho disponible */
  margin: 0 auto; /* Centra el formulario horizontalmente */
  text-align: center;
  padding: 4rem 0;
}

h2 {
  margin-bottom: 1.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espacio entre los elementos del formulario */
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}

.form-message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.row {
  display: flex;
  gap: 1rem;
  justify-content: center; /* Centra los elementos horizontalmente */
  width: 100%;
}

input,
textarea {
  background: rgb(241, 241, 241);
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

textarea {
  resize: none; /* Evita que se redimensione */
  height: 150px; /* Tamaño fijo para el área de texto */
}

button {
  align-self: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #d35400;
}
</style>
