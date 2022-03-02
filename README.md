# Ricky Morty Wiki

Is a project that brings you rick and morty characters information includes location, episodes.

See demo here [https://ricky-morty-wiki.vercel.app/](https://ricky-morty-wiki.vercel.app/).

## Reference

All web services provided by [http://rickandmortyapi.com/](http://rickandmortyapi.com/) and the base url configured in `.env` file at root directory

## Pages

Each page wrapped in `MainLayout` container component.

#### Home Page

List of characters with summary information renderd with `CharacterCard` components wrapped by grid layout. The list also fetch more data by scrolling to the end (Infinite scroll list)

#### Character Profile

The character information in detail shows `LocationCard` component for rendering location and origin of the character in the left side of the page. Episode list that chracter palyed role rendered with `EpisodeCard` compoenent with accordion behaviour. After clicking on `More Info` button in home page you can reach this route `/character?id={chracterId}`

## Types and Interfaces

#### Global

- Global Types are located in `global.d.ts` at the root directory

#### Specific

Specific interfaces related to fetched data located at `src/lib/interfaces` includes:

- [ICharacter](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ICharacter.ts)
- [IEpisodes](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/IEpisode.ts)
- [ILocation](https://github.com/milixov/ricky-morty-wiki/blob/main/src/lib/interfaces/ILocation.ts)

## Components

## Hooks

#### General

- Event listener hook for imlementing event and managing the mount/unmount outside the components. This helps for detecting when the scroll ends. Located in `src/hooks` directory

#### Web Services

- React-query queries for fetch API. Located in `src/services/index.ts` directory

## Getting started in Developer mode

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Launch the Project locally

For building the project and start it on your local machine use:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Launch the Project

Use `Dockerfile` at the root directory

## Libraries and tools

- Programming Language: **JavaScript**
- Typecheck: **Typescripy**
- Dom Manipulation: **React**
- SSR: **Next.js**
- Network Layer: **React Query, Axios** [https://react-query.tanstack.com/](https://react-query.tanstack.com/)
- UI Library: **UI Kit** [https://getuikit.com/](https://getuikit.com/)
- Styling: **SCSS**
- Code Quality: **ESLint, Prettier, Husky**
