# anecdotes
This program allows users to randomly generate and vote on their favorite anecdotes from a list of predetermined anecdotes.

# Features
  - Randomly generate an anecdote from a list of anecdotes by clicking a button.
  - Vote for the anecdote by clicking a vote button.
  - Increment a stateful counter that increases +1 everytime a user votes for an anecdote.
  - Display the anecdote with the most votes and the number of times users have voted for the anecdote.

# Install Dependencies
Execute `npm install` to install dependencies inside `package.json` and generate `node_modules` folder in your project root directory.

# Run the program
Execute `npm start` from the root directory to run the app in the development mode on [http://localhost:3000](http://localhost:3000).

# Version History
- 0.3:
  - Added new section "Anecdote with most votes"
  - Section dynamically displays the anecdote with the most votes and how many votes the anecdote has.
- 0.2:
  - added voting button
  - program is stateful and remembers how many times an anecdote has been voted for
- 0.1:
  - button displays a single random anecdote from an array of 7 anecdotes
  - Section "Anecdote of the day"

# Footnotes
- Author: Dominick DeChristofaro
- Last Update: 2022/05
- Last Section Implemented: 1.14 (step3)