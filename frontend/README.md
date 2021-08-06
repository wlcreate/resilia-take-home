# Resilia Take Home - Frontend

The following is repeated from the main repo README, however in case it is easier to read the frontend's information separately from the backend I have decided to include this README.

## Description
This frontend only has one route, which is essentially the landing/home page. On page load, through `useEffect` we fetch the notifications from our backend by making a `get` request and once we get our response, update the state of `notifications` to pass as props to `NotificationsContainer`. It is within `NotificationsContainer` that each notification is displayed on the DOM.

## Tech Stack

- React
- CSS

## Getting Started

### Dependencies

- Node Package Manager (`npm`)
- Node.js

Follow the [instructions here to install Node.js and `npm`](https://nodejs.org/en/). Note that `npm` is distributed with Node.js which means that when you download Node.js, you automatically get `npm` installed on your computer.

### Installing

**Note**: For convenience, it's important to start the backend (Rails) server first. By doing so, Rails will be available at `localhost:3000` and then the frontend (React) will change to a different port after prompting you in the terminal (simply type `y` once the prompt appears). You will then be able to view the frontend at `localhost:3001`.

Assuming you have already cloned the main repo and have a tab in your terminal specifically for this directory (`cd frontend`):

- install all required dependencies

```
npm install
```

### Executing

- Run the server:

```
npm start
```

- Open http://localhost:3001 with your browser to see the result.

## Solution formulation

I chose my tech stack because I am most familiar and comfortable with it.

I chose React as my frontend to take advantage of React's state, props, and hooks. I decided to use the useEffect hook so that on page load/refresh the notifications will be fetched and displayed because I believe it is better user experience; I do not think that the user would necessarily want to see a blank page first and then need to do an "extra step" by clicking on something to get the notifications. Once the notifications are received as a response from the API, I turn that response into JSON and then save update the state of notifications. I decided to also separate the NotificationsContainer and Notification into their own components to separate concerns, make it easier to debug, and make them reusable for the future. As a result, since I separated these components I needed to pass the notifications to display as props.
