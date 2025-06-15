# Web Development Project 3 - _Cobra Kai Flashcards Quiz_

Submitted by: **Sebastián L. Corporán Berríos**

This web app: **tests the user's knowledge on the series "Cobra Kai". There are 13 questions, each one will be displayed in a flashcard format. Below the flashcard, the user enters the answer. If such answer is wrong, a hint is given, otherwise, it displays a message that confirms that the answer was correct. This web app also has a button that shuffles the cards. It also keeps track of the user's current streak, and the user's longest streak. If the user guesses an answer incorrectly, the counter resets to 0.**

Time spent: **20** hours spent in total

## Required Features

The following **required** functionality is completed:

-   [x] **The user can enter their guess into an input box _before_ seeing the flipside of the card**
    -   Application features a clearly labeled input box with a submit button where users can type in a guess
    -   Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
    -   Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
-   [x] **The user can navigate through an ordered list of cards**
    -   A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
    -   A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
    -   Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

-   [x] Users can use a shuffle button to randomize the order of the cards
    -   Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked
    -   Cards should change to a random sequence once the shuffle button is clicked
-   [ ] A user’s answer may be counted as correct even when it is slightly different from the target answer
    -   Answers are considered correct even if they only partially match the answer on the card
    -   Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
-   [x] A counter displays the user’s current and longest streak of correct responses
    -   The current counter increments when a user guesses an answer correctly
    -   The current counter resets to 0 when a user guesses an answer incorrectly
    -   A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
-   [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
    -   The user can mark a card to indicate that it has been mastered
    -   Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

-   Restricted the user from clicking the card.
-   Instead of flipping the card to display the answer, the answer was displayed in a paragraph below the form.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="./assets/Flashcard_Quiz_Video_Walkthrough.gif" title='Video Walkthrough' width="" alt="Video Walkthrough" />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The challenges that I encountered while building this app are the following:

-   Using the "Lifting State Up": Learning this topic really gave me a hard time. I just could not wrap my head around how I implement the "logic" of a child component in the parent component. In the case of this project, I just could not understand how in the "App.jsx" component, I would validate the form. I spent days trying to understand. Luckily, one of the members of the Special Topics Operation in the "Program Help" Slack channel, helped me grasp this topic. It took me a while, but I eventually understood.
-   Making the card flip: This was another challenge that took a lot of time. After hours of "googling" how to flip a card, I found a great article which explained things great. Thanks to that article, I managed to make the card flip.
-   Displaying visual feedback when the user guesses a wrong answer, and when the user guesses a right answer: At first, I was using DOM manipulation to display such feedback. Despite spending time manipulating the DOM, I could not make it work. Eventually, asked AI to help me, and it told me that we should never use DOM manipulation in React. That to manipulate UI state, it is best to use state/props.

## License

    Copyright [2025] [Sebastián L. Corporán Berríos]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
