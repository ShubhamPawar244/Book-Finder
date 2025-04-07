# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Features

- Search for books by title or author.
- Display results with book covers, titles, authors, and descriptions.
- Responsive design for a good user experience on desktop and mobile.
- provided links to preview and view info also
- structured in card format for better readability

## Technologies Used

- *React*: JavaScript library for building user interfaces.
- *Axios*: Promise-based HTTP client for the browser and Node.js, used for API requests.
- *Google Books API*: API used to fetch book data.
- *CSS*: For basic styling and layout of the application.

## API used 

- Google Books API :'https://www.googleapis.com/books/v1/volumes?q=""'
- where q is the input value from the search bar provide the search results
