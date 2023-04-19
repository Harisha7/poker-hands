const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isOnePair returns truthy is one pair', () => {
	let hand = new Hand('♠10','♥10','♠8','♥7','♣4');
	expect(CompareHands.isOnePair(hand)).toBeTruthy();
})

test('Check that isOnePair returns falsy is not one pair', () => {
	let hand = new Hand('♥k','♦2','♣4','♠5','6♠');
	expect(CompareHands.isOnePair(hand)).toBeFalsy();
});