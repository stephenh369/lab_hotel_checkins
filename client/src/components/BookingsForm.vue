<template>
    <form id="bookings-form" v-on:submit="addBooking" method="post">
        <h2>Add A Booking</h2>
        <div class="form-wrapper">
            <label for="name">Guest Name:</label>
            <input type="text" id="name" v-model="name"/>
        </div>
        <div class="form-wrapper">
            <label for="email">Guest Email:</label>
            <input type="email" id="email" v-model="email"/>
        </div>
        <div class="form-wrapper">
            <label for="status">Checked In?</label>
            <select name="status" v-model="status">
                <option value="" disabled></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>

        <input class="btn" type="submit" value="Save Booking" id="save"/>
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
            event.preventDefault();
            const booking = {
                name: this.name,
                email: this.email,
                status: this.status
            }
            if (booking.name === "") {
                return alert('Guest name required')
            };
            if (booking.email === "") {
                return alert('Guest email required')
            };
            if (booking.status === "") {
                return alert('Check-in status required')
            };

        BookingService.addBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        alert('Booking added!');
        }
    }
}
</script>

<style>
    #bookings-form {
        width: 50%;
        margin: 10px auto;
        background-color: #666;
        color: white;
        opacity: 0.75;
        padding: 20px;
    }
    .form-wrapper {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
    }
    .form-wrapper > input{
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: 2px white solid;
        width: 50%;
    }
    .form-wrapper > select {
        width: 20%;
        background-color: #f4f4f4;
    }
</style>