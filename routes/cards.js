var express = require('express');
var router = express.Router();

const cardBankService  = require('../memoryService/cardBank')
const cardBank = cardBankService.cardBank;

//Get a set of quetions
router.get('/:number', function (req, res) {
    console.log(typeof cardBank)
    const cardsNoSolutions = cardBank.sort(() => 0.5 - Math.random()).slice(0, req.params.number)
    .map(cardElement => ({
        card: cardElement.card,
        answers: cardElement.answers,
        id: cardElement.id
    }));
    res.send(cardsNoSolutions);
})


//Get the all the cards
router.get('/', function (req, res) {
    const cardsNoSolutions = cardBank.map(cardElement => ({
        card: cardElement.card,
        answers: cardElement.answers,
        id: cardElement.id
    }));
    res.send(cardsNoSolutions);
});




module.exports = router;
