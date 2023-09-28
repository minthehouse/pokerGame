
# Poker Simulation Game

Welcome to the Poker Simulation Game, an Ionic Angular application that allows you to simulate poker games with various players and view the results. This README provides an overview of the project, how to set it up, and how to use it.



https://github.com/minthehouse/pokerGame/assets/32519588/d57b49e6-2145-41d5-92d8-0c67f2e0b514



## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Enums and Interfaces](#enums-and-interfaces)
- [NGXS Store](#ngxs-store)
- [Tailwind CSS](#tailwind-css)


## Features

- Simulate poker games with 2 to 8 players.
- View the winner and results of each game.
- Integrated NGXS Store for state management.
- Styled with Tailwind CSS for a modern and responsive UI.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed. [Download Node.js](https://nodejs.org/)
- Please check `.nvmrc` file to use the correct node version for this application. 

## Getting Started

To get this project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/minthehouse/pokerGame.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pokerGame
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ionic serve
   ```
   
   or
   
   ```bash
   npm start
   ```
   
   The application should now be accessible in your browser at `http://localhost:8100` or `http://localhost:4200`.

## Usage

- Select the number of players you want for the poker game.
- Click the "Start Game" button to simulate the poker game.
- View the winner and results of the game.

## Enums and Interfaces

The project uses the following enums and interfaces to maintain strong typing and structure:

### Enums

- `Suit`: Represents the suits of playing cards.
- `Rank`: Represents the ranks of playing cards.
- `PokerHandHierarchy`: Defines the hierarchy of poker hands.
- `CardsPerPlayer`: Specifies the number of cards dealt to each player.

### Interfaces

- `PlayerHand`: Represents a player's hand in the game, including their score, cards, and winner status.
- `Card`: Describes a playing card with a suit and rank.

These enums and interfaces ensure that the application is well-typed and maintainable.


## Responsive Design

The Poker Simulation Game is designed to be responsive, providing an optimal user experience on various screen sizes. This responsiveness is achieved through the use of Tailwind CSS and screen size configurations.

### Tailwind CSS Configuration

In the `tailwind.config.js` file, screen sizes have been defined to adapt the layout and styling based on different device dimensions:

```javascript
module.exports = {
  theme: {
    screens: {
      xs: { max: "375px" },   // Extra-small devices
      sm: "376px",            // Small devices
      md: "768px",            // Medium-sized devices
    },
    // ... Other configuration settings ...
  },
  // ... Other Tailwind CSS settings ...
};
```

### Usage in Templates

These screen size configurations are applied throughout the application's templates to adjust the sizing and positioning of UI elements. For example, image dimensions are adapted based on screen sizes:

```html
<img
  [src]="getCardImageSrc(card)"
  class="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24"
/>
```

This ensures that the Poker Simulation Game offers a consistent and enjoyable experience to users on devices of varying screen sizes.

This condensed version provides a concise overview of how you've made your app responsive using Tailwind CSS and screen size configurations. Feel free to customize it further if needed.

## NGXS Store

This project utilizes the NGXS Store for state management. The store is used to manage the number of players and potentially other game-related data. You can extend the store to manage additional game features as needed.


