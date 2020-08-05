<template>
  <div>
      <h2>All Bookings</h2>
    <ul>
        <booking v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import Booking from './Booking.vue'
import BookingService from "@/services/BookingService.js"

export default {
    name: 'bookings-list',
    data() {
        return {
            bookings: []
        }
    },
    mounted() {
        BookingService.fetchBookings()
        .then(bookings => this.bookings = bookings);

        eventBus.$on("booking-added", (booking) => {
            this.bookings.push(booking)
        })

        eventBus.$on("booking-deleted", (id) => {
            let index = this.bookings.findIndex(booking => booking._id === id)
            this.bookings.splice(index, 1)
        })

        eventBus.$on("booking-updated", (updatedBooking) => {
            let index = this.bookings.findIndex(booking => booking._id === updatedBooking._id)
            this.bookings = [...this.bookings.slice(0, index), updatedBooking, ...this.bookings.slice(index + 1, -1)]
        })
    },
    components: {
        'booking': Booking
    }
}
</script>


<style>

</style>