<template>
    <div class="booking">
        <h2>Name: {{booking.name}}</h2>
        <h2>Email: {{booking.email}}</h2>
        <h2>Check-in Status: {{booking.status}}</h2>

        <button v-on:click="deleteBooking">Delete Booking</button>
        <button v-on:click="updateStatus">Update Status</button>
    </div>
</template>

<script>
import { eventBus } from "@/main.js"
import BookingService from "@/services/BookingService.js"

export default {
    name: "booking",
    props: ["booking"],

    methods: {
        deleteBooking() {
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit("booking-deleted", this.booking._id))
        },

        updateStatus() {
            const newStatus = this.booking.status === "Yes" ? "No" : "Yes";

            BookingService.updateBooking( { status: newStatus }, this.booking._id)
            .then(( updatedBooking ) => eventBus.$emit("booking-updated", updatedBooking))
        }
    }
}
</script>

<style>

</style>