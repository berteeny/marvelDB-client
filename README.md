# MarvelFlix

MarvelFlix is a client-side, single-page React application which displays a collection of all current movies in the Marvel Cinematic Universe, and allows users to read about and save movies to their profile.

## Technologies
- React
- Bootstrap
- Parcel
- ES6

## Features
- Users can sign up for an account via the `SignupView` component or log in to their account via the `LoginView` component
- Upon signing in, users can see the unfiltered database of Marvel movies, all displayed as `MovieCard` elements, styled with React Bootstrap. 
- Users can search movies by title and the app will filter the movies being displayed relative to the search criteria
- Each `MovieCard` component can be clicked to open a `MovieView` component, which displays more information about the movie such as release, length, director information, etcetera
- Users can add movies to their list of favourites, which can be accessed via the `ProfileView` component
- Users can edit their information or permanently delete their account and all associated information via the `ProfileEditView` component

## Hosting & Installation 
The application is hosted via [Netlify](marvelflixdb.netlify.app) here.

To run the application locally, this repository can be pulled to local host and the build process run with Parcel:

```bash
parcel src/index.html
```
The app will be running on `localhost:1234` in the browser.

## Dependancies
```
    "bootstrap": "^5.3.3",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.2",
    "react-dom": "^18.3.1",
    "react-router": "^6.23.1",
    "react-router-dom": "^6.23.1"
```
## devDependancies
```
    "@parcel/transformer-sass": "^2.12.0",
    "parcel": "^2.12.0",
    "process": "^0.11.10"
```



## API

The API used was built for a prior [project](https://movie-api-v2dh.onrender.com) as a prerequisite for this client. The Github repository for this project can be found [here.](https://github.com/berteeny/Movie_API)
