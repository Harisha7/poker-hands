const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isHighestCard returns truthy is highest card', () => {
	let hand = new Hand('♦K','♦Q','♥3','♠4','♠7');
	expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});

test('check that isHighestCard returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♦K','♦Q','♥3','♠4','♠7');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♦A');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});
