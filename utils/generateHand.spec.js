const { dealHand } = require("./generateHand");
const { getRandomInt } = require("./getRandomInt");

const randomIntMock = jest.mock('./getRandomInt');

// beforeEach(() => {
//   randomIntMock.mockClear();
// });

it('dealHand returns 5 cards', () => {
  console.log(randomIntMock);
  randomIntMock
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(11)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(12)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(11)
    ;
  const hand = dealHand();

  expect(hand.length).toEqual(5);
});

it('dealCard returns a card', () => {
  randomIntMock
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(11);
  const card = dealCard();

  expect(!!card.suit).toEqual(true);
  expect(!!card.value).toEqual(true);
});