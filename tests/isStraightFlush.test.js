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