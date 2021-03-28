# Cine Take-home
An assignment using the [SWAPI API](https://swapi.dev)

## Problem

Objects returned from API responses do not have unique identifiers. This poses a problem due to the fact that React requires an unique id as a key attribute when mapping components to assist in rerendering efficiently during its reconciliation phase. Also, without an unique ID it makes it quite difficult to fetch a single resource from a response of a collection. They way I solved this was identifying the unique identifier dwells in the key of "url" from the response of a resource (or resources if fetching a collection). I leveraged a regex helper function to extract and number as a key, It is also solved my issue of routing to individual characters. With this function and the help of React-Routers useParams hook, I am able to render a single character on its own individual page.

Another issue was incomplete data. Sub collections were incomplete and replaced by a link to the resource. The first solution I thought of was to create another react component that when initially loaded, fetches and renders that link, Instead I chose to use Promise.all, mapping each link to fetch and passing it to Promise.all and resolving them. Then I made use of the ES6 spread operator to replace the newly fetched data, with the originally fetched object. This way the user can see all the data, in one page.


## Technologies used

[<img src='https://img.icons8.com/color/344/javascript.png' height='100'>]() [<img src='https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png' height='100'>]() [<img src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/square_256/redux.png' height='100'>]() [<img src='https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png' height='100'>]() [<img src='https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg' height='100'>]() 

## Todos

- [x] List Page
  - [x] Display list of characters.
  - [x] Each character, display name, birthyear, height and mass.
  - [x] Each character should be clickable and go to character page.
- [x] Character Page
  - [x] Show All Properties of character.
  - [x] Back button to return to character list.
- [x] Pagination
  - [x] Next and previous buttons.
- [x] Extras
  - [x] Commits.
  - [x] Loaders on list and individual char
  - [x] Maintain page state
