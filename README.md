# My Calendar App

[My Calendar Web Application](https://my-calendar-app-dy.herokuapp.com/) - Working link (Heroku deployed)

## Features

- Calendar view to organize reminders
- Create reminders and assign it a date to see it in your calendar
- Edit and delete reminders anytime
- Your reminders can be color coded to be better organized
- Sidebar drawer to display all reminders for a selected date.
- Date picker to jump to any date in the calendar
- Ability to go back or forward one month with the arrows

## Tech

Dillinger uses a number of open source projects to work properly:

- [ReactJS](https://reactjs.org) - Main javascript framework
- [React Redux](https://react-redux.js.org/) - State management library
- [Material UI](https://mui.com/) -  great UI boilerplate for modern web apps
- [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework 


## Installation

My Calendar App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependhttps://my-calendar-app-dy.herokuapp.com/encies and start the server.

```sh
npm i
```

## Development

Open your favorite Terminal and run these commands.

To start the React server use:

```sh
npm start
```

To start the Cypress test:

```sh
npm test
```

Server and Test library set to run in http://localhost:3000/


## Screenshots

![Main](https://i.postimg.cc/0NNjxGk6/Screenshot-from-2021-10-31-16-59-13.png)

### - Main and first view when inside the application. Sidebar natural state is closed

When a date in the calendar is clicked the sidebar will open and the selected date will change to show reminders for that date.

![Main2](https://i.postimg.cc/bJ7wQKQb/Screenshot-from-2021-10-31-16-59-40.png)

### - Main and view when sidebar is opened and no reminders are found for that date.

![Main3](https://i.postimg.cc/1XD5MJHd/Screenshot-from-2021-10-31-17-00-37.png)

### - Main and view when sidebar is opened and reminders are found for that date.

When a reminder is clicked on in the sidebar, a form to edit that reminder will open.

![CalendarBar](https://i.postimg.cc/9MRfwWqC/Screenshot-from-2021-10-31-16-59-32.png)

### - Calendar bar: 
* Add a reminber button: Open a form to add a new reminder
* Datepicker to switch to any date in the calendar
* Back arrow to go back one month
* Text with current month
* Forward arrow to go forward one month

