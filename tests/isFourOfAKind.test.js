const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('test that is FourOfAKind returns truthy is four of a kind', () => {
	let hand = new Hand('♥4','♦4','♣4','♠4','♠7');
	expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});


test('test that is FourOfAKind returns falsy is not four of a kind', () => {
	let hand = new Hand('♣5','♦5','♣6','♥4','♣7');
	expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('test that falsy FourOfAKind returns as 0', () => {
	let hand = new Hand('♣5','♦5','♣6','♥4','♣7');
	expect(CompareHands.isFourOfAKind(hand)).toBe(0);
});

test('test that isFourOfAKind returns a higher score for a stronger hand (if two hands but with four of a kind)', () => {
  let hand1 = new Hand('♥4','♦4','♣4','♠4','♠7');
  let hand2 = new Hand('♣5','♦5','♣6','♥4','♣7');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});