News Website Project
This project is a responsive React-based news website that integrates several API endpoints to fetch and display data dynamically. It includes features like user authentication (signup and login), a news search system, and category-based news filtering. The project leverages the Faux API for backend functionality.

Features
Dynamic News Display:

Fetches top headlines and displays them on the homepage.
Category-based filtering for tailored news content.
Search functionality for finding news articles by keywords.
User Authentication:

Signup: Users can create an account by providing their name, email, and password.
Login: Authenticates users based on the email and password provided.
Responsive Design:

Fully responsive UI using Bootstrap for an optimal viewing experience across devices.
API Integration:

Faux API: Fake API endpoints are utilized for dynamic data handling, including user registration and news retrieval.
API Endpoints
Implemented Endpoints
GET All News:

Fetches all news articles for the homepage.
Endpoint: https://faux-api.com/api/v1/<token>/news
Method: GET
GET News by ID:

Fetches a specific news article by its unique ID.
Endpoint: https://faux-api.com/api/v1/<token>/news/<id>
Method: GET
GET News by Category:

Fetches news articles based on a specified category.
Endpoint: https://faux-api.com/api/v1/<token>/news/{category:<value>}
Method: GET
POST User Signup:

Registers a new user by saving their name, email, and password.
Endpoint: https://faux-api.com/api/v1/<token>/users
Method: POST
GET All Users:

Fetches all registered users (used during login to validate credentials).
Endpoint: https://faux-api.com/api/v1/<token>/users
Method: GET
Project Structure
Key Directories and Files
src/components:

Navbar.js: Contains the navigation bar for navigating through the website.
Footer.js: Displays the footer at the bottom of each page.
src/pages:

Home.js: Displays the homepage with top headlines.
Signup.js: Handles user registration using Faux API.
Login.js: Authenticates users and provides access to the website.
src/services/api.js:

Contains API service functions for interacting with the Faux API.
Installation and Setup
Prerequisites
Node.js installed on your system.
A code editor like Visual Studio Code or WebStorm.
Steps
Clone the Repository:
bash
Copy code
git clone <repository_url>
Install Dependencies:
bash
Copy code
npm install
Run the Project:
bash
Copy code
npm start
Access the Website:
Open your browser and navigate to http://localhost:3000.
How It Works
News Fetching:

News data is fetched dynamically from the Faux API using the fetchAllNews function.
Category and search-based filtering is applied directly to the fetched data.
User Signup:

User details are posted to the Faux API using the postSignupData function.
Successfully registered users receive a confirmation message.
User Login:

The login system checks entered credentials against stored data using the fetchAllUsers function.
Displays a personalized message upon successful login.
Search System:

Users can input keywords in the search bar to fetch relevant news articles dynamically.
Technologies Used
React.js: Front-end framework for building UI.
React Router: For navigation between pages.
Bootstrap: For responsive design and styling.
Faux API: For backend-like functionality in a front-end project.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
