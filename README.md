# Cine Take-home
An assignment using the [SWAPI API](https://swapi.dev)

## First Problem

Objects returned from API responses do not have unique identifiers. This poses a problem due to the fact that React requires an unique id as a key attribute when mapping components to assist in its re-rendering efficacy during its reconciliation phase. Also, without an unique ID it makes it quite difficult to fetch a single resource from a response of a collection. They way I solved this was identifying the unique identifier dwells in the key of "url" from the response of a resource (or resources if fetching a collection). I leveraged a regex helper function to extract the number as a key, It is also solved my issue of routing to individual characters. With this function and the help of React-Routers useParams hook, I am able to render a single character on its own individual page.

## Second Problem
Another issue was incomplete data. Sub-collections were incomplete and replaced by a link to the resource. The first solution I thought of was to create another react component that when initially loaded, fetches and renders that link passed from its parent component, Instead I chose to use Promise.all, mapping each url to fetch and passing the array of promises to Promise.all and resolving them. Then I made use of the ES6 spread operator to replace the properties where links were provided with the newly fetched array data. This way, the user can see all the data, in one page.

## Technical Choices

### State Management

In regards to state management, It would have been simpler to just use local state, Instead I chose to use [Redux](https://redux.js.org/) and [Redux Tool Kit](https://redux-toolkit.js.org/) for state management, to demonstrate my knowledge in global state management and because Thunks written with [Redux Tool Kit](https://redux-toolkit.js.org/) provide action types for the status of a promise, here I am able to change state depending on the status of the promise ie. If the promise is pending I can set the state to Loading = true. [See an Example Here](https://redux-toolkit.js.org/api/createAsyncThunk#examples). Redux toolkit is deemed the standward way to write redux logic and addresses complaints in regards to how we used to write redux logic. 

##### Tears of Redux

> *There's too much boilerplate!* or
> *Configuring a store takes too long* and 
> *I have to add a lot of packages to get Redux to do anything useful*
> 

Additionaly [Redux Tool Kit](https://redux-toolkit.js.org/) uses [Immer.js](https://immerjs.github.io/immer/) under the hood when writing reducers with createReducer or createSlice, and provides a way to write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.

### Pagination

Usually when fetching from a paginated API, parameters are passed to get a specific page. I scoured the docs, and managed to just leverage the next and prev properties from the response. I used these links as essentially next buttons and the response from these urls would update the state with the next page. It's an unorthodox was to paginate, but it works.

### Styling

TailwindCSS is a utility first CSS framework. If you you are familiar with your css properties, then you can use TailwindCSS just fine. It makes prototyping and getting an MVP looking decent in a short amount of time. This was a personal choice as I enjoy the use of tailwind and its css classes. One thing I would have done in regards to Tailwind styling is to use the @apply directive to clean up the components.

## Technologies used

[<img src='https://img.icons8.com/color/344/javascript.png' height='100'>]() [<img src='https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png' height='100'>]() [<img src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/square_256/redux.png' height='100'>]() [<img src='https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png' height='100'>]() [<img src='https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo.svg' height='100'>]() 

An assignment using the [SWAPI API](https://swapi.dev)

## First Problem

Objects returned from API responses do not have unique identifiers. This poses a problem due to the fact that React requires an unique id as a key attribute when mapping components to assist in its re-rendering efficacy during its reconciliation phase. Also, without an unique ID it makes it quite difficult to fetch a single resource from a response of a collection. They way I solved this was identifying the unique identifier dwells in the key of "url" from the response of a resource (or resources if fetching a collection). I leveraged a regex helper function to extract the number as a key, It is also solved my issue of routing to individual characters. With this function and the help of React-Routers useParams hook, I am able to render a single character on its own individual page.

## Second Problem

Another issue was incomplete data. Sub-collections were incomplete and replaced by a link to the resource. The first solution I thought of was to create another react component that when initially loaded, fetches and renders that link passed from its parent component, Instead I chose to use Promise.all, mapping each url to fetch and passing the array of promises to Promise.all and resolving them. Then I made use of the ES6 spread operator to replace the properties where links were provided with the newly fetched array data. This way, the user can see all the data, in one page.

## Technical Choices

### State Management

In regards to state management, It would have been simpler to just use local state, Instead I chose to use [Redux](https://redux.js.org/) and [Redux Tool Kit](https://redux-toolkit.js.org/) for state management, to demonstrate my knowledge in global state management and because Thunks written with [Redux Tool Kit](https://redux-toolkit.js.org/) provide action types for the status of a promise, here I am able to change state depending on the status of the promise ie. If the promise is pending I can set the state to Loading = true. [See an Example Here](https://redux-toolkit.js.org/api/createAsyncThunk#examples). Redux toolkit is deemed the standward way to write redux logic and addresses complaints in regards to how we used to write redux logic.

##### Tears of Redux

> _There's too much boilerplate!_ or
> _Configuring a store takes too long_ and
> _I have to add a lot of packages to get Redux to do anything useful_

Additionaly [Redux Tool Kit](https://redux-toolkit.js.org/) uses [Immer.js](https://immerjs.github.io/immer/) under the hood when writing reducers with createReducer or createSlice, and provides a way to write simpler immutable update logic using "mutating" syntax. This helps simplify most reducer implementations.

### Pagination

Usually when fetching from a paginated API, parameters are passed to get a specific page. I scoured the docs, and managed to just leverage the next and prev properties from the response. I used these links as essentially next buttons and the response from these urls would update the state with the next page. It's an unorthodox was to paginate, but it works.

### Styling

TailwindCSS is a utility first CSS framework. If you you are familiar with your css properties, then you can use TailwindCSS just fine. It makes prototyping and getting an MVP looking decent in a short amount of time. This was a personal choice as I enjoy the use of tailwind and its css classes. One thing I would have done in regards to Tailwind styling is to use the @apply directive to clean up the components.

### Installation

$ git clone https://github.com/hector4213/CineAssignment.git
$ cd CineAssignment
$ npm install
$ npm start

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
