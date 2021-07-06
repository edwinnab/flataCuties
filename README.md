# Flatacalories

Today you'll be building an app for counting calories! You will be using a local
API and building out the frontend for our app, Flatacalories.

## Demo

Use this gif as an example of how the app should work.

![Demo](assets/demo.gif)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json
```

Test your server by visiting this route in the browser:

[http://localhost:3000/characters](http://localhost:3000/characters)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Core Deliverables

As a user, I can:

1. See all characters names in a `div` with the id of `"character-bar"`. Create
   a `span` tag with the character's name and add it the `div#character-bar`
   once you have retrieved the character data from the server. You will need to make a GET request to the
   following endpoint to retrieve the character data:

   ```txt
   GET /characters

   Example Response:
   [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "calories": 0
    },
    {
      "id": 2,
      "name": "Mr. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "calories": 0
    },
    ...
   ]
   ```

2. When the character in the `div#character-bar` is clicked, display the
   character's details in the `div#detailed-info`. You can either use the character information from your first request, or make a new request to this endpoint to get the character's details:

   ```txt
   GET /characters/:id

   Example Response:
   {
    "id": 1,
    "name": "Mr. Cute",
    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    "calories": 0
   }
   ```

3. When the `form#calories-form` is submitted, add the number of calories from
   the input field to the character displayed in the `div#detailed-info`. **No
   persistence is needed** for the core deliverables.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills. Consider refactoring your current code before moving on.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

1. Persist the changes to the character's calories when the `form#calories-form`
   is submitted. You will need to make PATCH request to this endpoint with the
   updated calories:

   ```txt
   PATCH /characters/:id

   Headers:
   Content-Type: application/json

   Body:
   {
     "calories": 800
   }

   Example Response:
   {
     "id": 1,
     "name": "Mr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "calories": 800
   }
   ```

2. Clicks on a `Reset Calories` button to set calories to `0`. Persist calories
   value to the server and update the DOM. You will need to make PATCH request to this endpoint with the
   updated calories:

   ```txt
   PATCH /characters/:id

   Headers:
   Content-Type: application/json

   Body:
   {
     "calories": 0
   }

   Example Response:
   {
     "id": 1,
     "name": "Mr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "calories": 0
   }
   ```

3. Change character's name. You will need to create a new form for updating the
   character's name in the `index.html` file. Then, when the form is submitted,
   update the character's name everywhere it appears on the DOM. You will need to
   make PATCH request to this endpoint with the updated name:

   ```txt
   PATCH /characters/:id

   Headers:
   Content-Type: application/json

   Body:
   {
     "name": "Dr. Cute"
   }

   Example Response:
   {
     "id": 1,
     "name": "Dr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "calories": 0
   }
   ```

4. Add a new character. You will need to create a new form for creating the
   character in the `index.html` file. Then, when the form is submitted,
   add the new character to the `div#character-bar` and display it in the `div#detailed-info`. You will need to
   make POST request to this endpoint:

   ```txt
   POST /characters

   Headers:
   Content-Type: application/json

   Body:
   {
     "name": "Dr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "calories": 0
   }

   Example Response:
   {
     "id": 6,
     "name": "Dr. Cute",
     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
     "calories": 0
   }
   ```
