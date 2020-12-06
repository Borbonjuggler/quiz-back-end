var express = require('express');
var router = express.Router();

const cardBankService  = require('../memoryService/cardBank')
const cardBank = cardBankService.cardBank;

//Get a set of quetions
router.get('/:number', function (req, res) {
    console.log(typeof cardBank)
    const questionsNoSolutions = cardBank.sort(() => 0.5 - Math.random()).slice(0, req.params.number)
    .map(questionElement => ({
        question: questionElement.question,
        answers: questionElement.answers,
        id: questionElement.id
    }));
    res.send(questionsNoSolutions);
})


//Get the all the questions
router.get('/', function (req, res) {
    const questionsNoSolutions = cardBank.map(questionElement => ({
        question: questionElement.question,
        answers: questionElement.answers,
        id: questionElement.id
    }));
    res.send(questionsNoSolutions);
});

//Validate Anwer
router.post('/:id/:answer', function (req, res) {
    const foundQuestion = cardBank.find(question => question.id === req.params.id);
    if(foundQuestion.correct === req.params.answer)
        res.send(true);
    else
        res.send(false);
});


module.exports = router;
