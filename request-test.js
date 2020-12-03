'use strict';

const axios = require('axios');

const questionElement = {
  question:
    "Which of the following card games revolves around numbers and basic math?",
  answers: ["Uno", "Go Fish", "Twister", "Munchkin"],
  correct: "Uno",
  id: "4150746"
}; 

//Request a Question by ID

axios.post('http://localhost:3000/questions/' + questionElement.id + '/' + questionElement.answers[2])
.then(result => {
  console.log(result.data);
})
.catch(error => {
  console.log(error);
});