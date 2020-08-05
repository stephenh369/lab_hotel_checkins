<template>
    <div class="booking">
        <h4>Name: {{booking.name}}</h4>
        <h4>Email: {{booking.email}}</h4>
        <h4>Check-in Status: {{booking.status}}</h4>
        <button class="btn" v-on:click="deleteBooking">Delete Booking</button>
        <button class="btn" v-on:click="updateStatus">Update Status</button>
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
    .booking {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .booking > .btn {
        margin-right: 5px;
    }
</style>