const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isTwoPair returns truthy is two pair', () => {
	let hand = new Hand('♥J','♠J','♣3','♠3','♥2');
	expect(CompareHands.isTwoPair(hand)).toBeTruthy();
})

test('Check that isTwoPair returns falsy is not two pair', () => {
	let hand = new Hand('♥7','♦3','♣2','♠6','5♠');
	expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});