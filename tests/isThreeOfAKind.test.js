const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
})

test('check that threeOfAKind returns falsy is not three of a kind', () => {
  let hand = new Hand('♥6', '♦2', '♣5', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});