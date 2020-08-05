<template>
  <div id="app">
    <nav id="nav-div">
      <h1>Hotel California</h1>
    </nav>
    <div id="overlay"></div>
  
    <bookings-form/>
    <bookings-list/>
  </div>
</template>

<script>

import BookingsForm from './components/BookingsForm.vue'
import BookingsList from './components/BookingsList.vue'

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList
  }
  
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background: url('./assets/hotel-image.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
}
body > img {
  height: 100%;
}
/* #overlay {
  position: fixed;
  display: block; 
  width: 100%; 
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 1;
} */
#nav-div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #F7C08A;
}
.btn {
  background-color: #1FABAD;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
.btn:hover {
  background-color: #2FD7DA;
  cursor: pointer;
}
</style>
