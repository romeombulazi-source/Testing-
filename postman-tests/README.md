[README.md](https://github.com/user-attachments/files/26229369/README.md)
# DummyJSON API Tests

Hey there! This is just a simple Postman collection I put together while learning how to work with the DummyJSON API. Nothing fancy, but it covers the basics.

## What's inside?

I've included tests for all the main CRUD operations you'd typically need:

- **POST** `/auth/login` - logging in (both successful and failed attempts)
- **GET** `/auth/me` - grabbing the current user's info
- **PUT** `/users/1` - updating a user completely
- **PATCH** `/users/1` - making partial updates
- **DELETE** `/users/1` - deleting a user

## How to use this

1. Download the collection file (the `.json` one)
2. Open Postman and click "Import"
3. Drag the file in and you're good to go

**Quick tip:** Run the "Successful Login" request first. It'll grab an auth token and store it automatically for the other requests. I spent way too long figuring out why the other requests kept failing before I realized I needed to do this.

## Test login credentials

DummyJSON comes with a few test users. Here are the ones I've been using:

| Username | Password |
|----------|----------|
| emilys | emilyspass |
| michaelw | michaelwpass |

If you want to test the "wrong password" scenario, just mess up the password field. The API returns a 400 error like it should.

## What to expect

When things work correctly:
- Login returns a token and user info
- Protected endpoints work once you have the token
- Bad requests give proper error messages

## A note on the token

The token expires after a while (not sure exactly how long). If you start getting 401 errors, just re-run the login request to get a fresh one.

## Why I made this

I was playing around with API testing and needed a dummy API to practice with. DummyJSON seemed perfect for that. This collection is just my way of keeping track of what I've tested so far.

Feel free to use it if you're also learning API stuff or just need a quick test suite for something.

---

*Last updated: March 2026*
