use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "James",
        email: "jamesmonks@gmail.com",
        status: "Yes"
    },
    {
        name: "Stephen",
        email: "stephen@gmail.com",
        status: "No"
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        status: "Yes"
    }
]);