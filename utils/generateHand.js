const { getRandomInt } = require("./getRandomInt");

const dealtCards = {};
const suitDefs = ["NO VALUE", "hearts", "clubs", "spades", "diamonds"]

const dealHand = () => {
  const hand = [];

  for (i = 0; i < 5; i++) {
    hand.push(dealCard())
  }

  return hand;
}

const dealCard = () => {
  const suit = getRandomInt(4);
  const value = getRandomInt(13);

  if (dealtCards[suit] && dealtCards[suit][value]) {
    return dealCard();
  } else {
    if(!dealtCards[suit]) {
      dealtCards[suit] = {};
    }
    dealtCards[suit][value] = true;
    const suitName = suitDefs[suit];
    return {suit: suitName, value};
  }
}

module.exports = { dealHand };