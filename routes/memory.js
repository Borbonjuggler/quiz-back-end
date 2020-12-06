var express = require('express');
var router = express.Router();

const memoryService  = require('../memoryService/memoryGame')
const memoryGame = memoryService.memoryGame;


//Get a set of quetions
router.get('/:number', function (req, res) {
    console.log(typeof memoryGame)
    const questionsNoSolutions = memoryGame.sort(() => 0.5 - Math.random()).slice(0, req.params.number)
    .map(questionElement => ({
        question: questionElement.question,
        answers: questionElement.answers,
        id: questionElement.id
    }));
    res.send(questionsNoSolutions);
})


//Get the all the questions
router.get('/', function (req, res) {
    const questionsNoSolutions = memoryGame.map(questionElement => ({
        question: questionElement.question,
        answers: questionElement.answers,
        id: questionElement.id
    }));
    res.send(questionsNoSolutions);
});

//Validate Anwer
router.post('/:id/:answer', function (req, res) {
    const foundQuestion = memoryGame.find(question => question.id === req.params.id);
    if(foundQuestion.correct === req.params.answer)
        res.send(true);
    else
        res.send(false);
});


module.exports = router;
