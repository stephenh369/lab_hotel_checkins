<template>
  <div>
    <ul>
        <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
    </ul>
  </div>
</template>

<script>
import Booking from './Booking.vue'

export default {
    name: 'bookings-list',
    data() {
        return {
            bookings: []
        }
    },
    mounted() {
        this.fetchBookings();
        eventBus.$on("booking-added", (booking) => {
            this.bookings.push(booking)
        })

        eventBus.$on("booking-deleted", (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splic(index, 1)
        })
    },
    components: {
        'booking': Booking
    }
}
</script>


<style>

</style>