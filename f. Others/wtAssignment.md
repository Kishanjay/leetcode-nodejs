Please see below the details of our “Book a room” application backend service.

Assignment Instructions

A small company has an internal system to handle their meeting rooms. Write a simple backend that fulfils the following requirements:

A user wants to be able to book a meeting room for a specific date.

A room booking takes up the entire day, meaning that each meeting room can only have one booking on a particular date.

A user wants to be able to see all of the rooms available on a specific date.

A room is available if it has not been booked for that date

Spend a maximum of 3 hours on this assignment. If you need to cut corners, make your solution simpler (using dependencies or less optimal strategy) and describe what you would have done in the README file.

Make sure to prioritise your time well, we want to see a working solution. Write your code as if it were production code.

Example Scenario Context:

We have 4 meeting rooms: A, B, C, D.

We have 3 users: Jane, Sarah & John.

Booking:

Jane Books Room A for 1 October.

Jane Books Room A for 2 October.

Sarah Books Room B for 1 October.

John Books Room C for 2 October.

Availability:

1 October - Rooms C & D are still available.

2 October - Rooms B & D are still available.

3 October - All rooms are still available.

Delivery Specs:

Deliver your assignment by pushing to a private repository and sharing it with us.

Include a README file detailing your approach.

Focus only on the backend, do not write any frontend code.

Use Node.js with Typescript. You can use any HTTP Server frameworks of your choice like Express, Fastify, Koa, etc. or may be you like to keep things vanilla.

Write a RESTful API returning a JSON payload.
