# SeedBank Prototype v2

SeedBank is a gardening game that helps players to save money.

Players buy seeds through in-game microtransactions and plant them in their garden. 

Growing plants unlocks new seeds and features within the game.

The game will use techniques such as loot boxes and scarce/rare/legendary items to encourage the player to spend money.

It will, however, invest that money into a bank account or ISA on behalf of the player.

The game will also allow players to send seeds to each other and see their friends' gardens in the background of their own game.

This version is a basic proof-of-concept that includes a limited number of features. 

- Players can generate a garden and plant seeds in it
- The seeds grow into plants over a number of days
- Planting seeds unlocks new seed variants
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

Click on "Friend request" to bring up a cloud keyboard. Type in a friend's username, then click on the "+" sign at the bottom of the keyboard.

This will send a friend request to the username. If it is accepted, that user's garden will appear in the game.


### Planting seeds

1. Click on the "Seed" cloud to start cycling through available seeds.

2. A smaller cloud will also appear, displaying the number of seeds of that type that are available.

3. Click on the number to select a seed 
 
4. Click on any grass part of the garden to plant it.

Seeds grow over a number of days.

Plant more seeds to unlock new varieties.

### Sending seeds to friends

1. Click on the "Seed" cloud to start cycling through available seeds.

2. A smaller cloud will also appear, displaying the number of seeds of that type that are available.

3. Click on the number to select a seed 
 
4. Click on your friends island to send the seed to them.
