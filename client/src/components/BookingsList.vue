<template>
  <div>
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
    },
    components: {
        'booking': Booking
    }
}
</script>


<style>

</style>