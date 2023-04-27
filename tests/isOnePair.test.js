const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('test that isOnePair returns truthy is one pair', () => {
	let hand = new Hand('♠10','♥10','♠8','♥7','♣4');
	expect(CompareHands.isOnePair(hand)).toBeTruthy();
})

test('test that isOnePair returns falsy is not one pair', () => {
	let hand = new Hand('♥k','♦2','♣4','♠5','6♠');
	expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('test that falsy isOnePair returns as 0', () => {
	let hand = new Hand('♥k','♦2','♣4','♠5','6♠');
	expect(CompareHands.isOnePair(hand)).toBe(0);
});

test('test that isOnePair returns a higher score for a stronger hand (if two hands but with one pair)', () => {
  let hand1 = new Hand('♠10','♥10','♠8','♥7','♣4');
  let hand2 = new Hand('♥k','♦2','♣4','♠5','6♠');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});