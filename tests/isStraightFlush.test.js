const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns truthy if straight flush', () => {
  let hand = new Hand('♥A','♥K','♥Q','♥J','♥T');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
})

test('Check that isStraightFlush returns falsy is not straight flush', () => {
	let hand = new Hand('♥3','♦4','♣6','♠2','♦A');
	expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
}) ;

test('Check that falsy isStraightFlush returns as 0', () => {
	let hand = new Hand('♥3','♦4','♣6','♠2','♦A');
	expect(CompareHands.isStraightFlush(hand)).toBe(0);
}) ;

test('test that isStraightFlush returns a higher score for a stronger hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♥3','♦4','♣6','♠2','♦A');
  let hand2 = new Hand('♥A','♥K','♥Q','♥J','♥T');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});