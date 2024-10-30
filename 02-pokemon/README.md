# Pokédex
This proyect contains a 'working' Pokedex that uses React and Vite in order to work.
The Pokédex data is obtained through feching the information from the PokeAPI.

This proyect is still a 'Work In Progress', this proyect is still getting updated and it's not yet a finished product.

## Author
Made by @Alfonsojedi 

## Components used
- **PokeNav**: Navegaton with every region (stotred as NavItems) in it
  - **NavItem**: Nav list element
- **CardGrid**: Organices the cards (PokeCards) inside
  - **PokeCard**: A card with simplified pokemon data and a sprite (image) of it. It shows its main stats, typing, height and weight
- **PokeFull**: Un componente que se asemeja a una 2DS y a una Pokédex de la era, pero con ciertas diferencias
  - **DSButton**: Component that handles the start and select buttons on the "2DS"

- **Stater**: Stores the pokemon's main six stats on a column of progressbars. (Child of PokeCard & PokeFull)
  - **ProgressBar**: Progressbar of one of the Pokemon's main stats, colored accordingly for ease of use. Child component of Stater.
- **Type**: Makes a small sign showing the pokemon's type. (Child of PokeCard & PokeFull)
- **Weighter**: Uses a small space to put the Pokemon's height & weight. (Child of PokeCard & PokeFull)

<!---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
--->
