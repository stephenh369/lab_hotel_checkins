<template>
    <form id="bookings-form" v-on:submit="addBooking" method="post">
        <h2>Add A Booking</h2>
        <div class="form-wrapper">
            <label for="name">Guest Name:</label>
            <input type="text" id="name" v-model="name" required/>
        </div>
        <div class="form-wrapper">
            <label for="email">Guest Email:</label>
            <input type="email" id="email" v-model="email" required/>
        </div>
        <div class="form-wrapper">
            <label for="status">Checked In?</label>
            <select name="status" v-model="status">
                <option value="" disabled></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>

        <input type="submit" value="Save Booking" id="save"/>
    </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
    name: 'bookings-form',
    data() {
        return {
            name: "",
            email: "",
            status: ""
        }
    },

    methods: {
        addBooking(event) { 
            event.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                status: this.status
        }
        BookingService.addBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        }
    }
}
</script>

<style>
    #bookings-form {
        margin: 0 auto;
        
    }
</style>