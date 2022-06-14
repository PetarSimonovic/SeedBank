# SeedBank Prototype v2

SeedBank is a gardening game that helps players to save money.

Players buy seeds through in-game microtransactions and plant them in their garden. 

Growing plants unlocks new seeds and features within the game.

The game will use techniques such as loot boxes and scarce/rare/legendary items to encourage the player to spend money.

It will, however, invest that money into a bank account or ISA on behalf of the player.

The game will also allow players to send seeds to each other and see their friends' gardens in the background of their own game.

This version is a basic proof-of-concept that includes a limited number of features. 

- Players can generate a garden and plant seeds in it
- The seeds grow into plants over a numnber of days
- The game unlocks new items to reward the player for planting seeds
- Players can make friends and send seeds to each other.

The app is currently hosted on Heroku at:

https://rocky-ravine-64335.herokuapp.com

Financial features are not available in this version.


## Sign up or log in
  
Create an account at

https://rocky-ravine-64335.herokuapp.com

Note: this is a very very basic account creation page that performs some very limited validation logic.

Email is not currently used for anything at all.

### Create a garden

New users must first create a garden. 

SeedBank will randomly generate a garden whenever the "New garden" balloon is clicked.

"Save garden" will save the garden and move the player into the game. 

The player cannot regenerate the garden once it is saved.

### Getting started.

SeedBank delivers seeds and messages via balloons. 

Click on a balloon to receive its contents. Click on the balloon again to remove the text.

New players receive two introductory balloons that contain packets of seeds.

### The Cloud interface

The clouds above the garden are a basic UI.

The "Balloon shop" allows players to buy more seeds: these will be delivered in a balloon the next time that the player logs in. In this version, the player is simply presented with smaller, pastel-coloured clouds that function as loot boxes.

The "Seeds" cloud appears if the player has seeds to plant. Click on the cloud to cycle through the types of seeds available. 

Click on "Friend request" 



### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
