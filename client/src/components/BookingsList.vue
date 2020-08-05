<template>
  <div id="bookings-list-div">
      <h3>All Bookings</h3>
    <ul class="bookings-div">
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
            this.bookings = [...this.bookings.slice(0, index), updatedBooking, ...this.bookings.slice(index + 1, this.bookings.length)]
        })
    },
    components: {
        'booking': Booking
    }
}
</script>


<style>
    #bookings-list-div {
        width: 100%;
        height: 50%;
        margin: auto;
        margin-top: 50px;
        background-color: #666;
        color: white;
        opacity: 0.75;
        padding: 20px;
    }
    #bookings-list-div > h3 {
        text-align: center;
    }

</style>