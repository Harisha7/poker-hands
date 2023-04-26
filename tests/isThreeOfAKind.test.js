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


test('check that falsy threeOfAKind returns as 0', () => {
  let hand = new Hand('♥6', '♦2', '♣5', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBe(0);
});

test('test that isThreeOfAKind returns a higher score for a stronger hand (if two hands but with three of a kind)', () => {
  let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥6', '♦2', '♣5', '♠3', '♠7');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});
