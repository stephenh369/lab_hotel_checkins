<template>
  <div id="app">
    <nav id="nav-div">
      <h1>Hotel California</h1>
    </nav>
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
#nav-div {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #FFC5AD;
}
</style>