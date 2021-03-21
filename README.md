# SIMON CHALLENGE

## Overview
Simon is a memory game designed to see if the player can remember the sequence that the computer gives the player.
I'm going to build a game like this: https://www.mathsisfun.com/games/simon-says.html

## Rules
1. Must press start button to iniate game
1. Simon will give player a random sequence of numbers
1. The player than needs to repeat that sequence to win that round
1. Player will continue play as long as they repeat the correct sequence
1. If player doesn't repeat the correct sequence they lose the game and the game starts over

## User Stories
 - When I load the page, I will see four circle outlined in color in a grid and start button
 - When I push the start button, the circles will flash in a sequence filling in with color
 - When I click a circle, the circle will highlight with the color
 - When my clicks match the computers sequence, I will get an alert that I've won the round
 - If click the wrong sequence of colors I will get an alert I lost the game and the game will start will start over


## MVP Checklist
- Create a 2x2 grid
- Create start button
- Allow player to be able to push start button to iniate game
- Get computer to flash random circle
- Get computer to flash random cicle and add one flash to the sequence on every round (predeterminded by an array)
- Allow player to click circles
- Keep track of computers sequence
- Keep track of players sequence
- Check to make sure players sequence matched computers sequence
- Alert player that they have correct sequence or incorrect sequence
- Game restart when player loses

## Stretch Goals
- Make the circle look more like the original game (one big circle with start button in middele and color sections surrounding it)
- add more sequence rounds (10 or 15 rounds)
- keep track of how many wins the player has
- add a sound for each circle so when the sequence goes off each circle has its own sound (this will also work when player hits that circle)
- make final sounds for when player wins or loses
- add on another player
- add a timer for how long player has to guess sequence
- Computer area purely random with Math.random
- make game add one addtional sequence new rounds (ex: start with 1 push one round one and 2 on round 2) 




