const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that is FourOfAKind returns truthy is four of a kind', () => {
	let hand = new Hand('♥4','♦4','♣4','♠4','♠7');
	expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});


test('Check that is FourOfAKind returns falsy is not four of a kind', () => {
	let hand = new Hand('♣5','♦5','♣6','♥4','♣7');
	expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});