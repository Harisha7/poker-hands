const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that FullHouse returns truthy is full house', () => {
	let hand = new Hand('♠6','♥6','♦6','♣K','♥K' );
	expect(CompareHands.isFullHouse(hand)).toBeTruthy();
}) 

test('Check that FullHouse returns falsy is not full house', () => {
	let hand = new Hand('♥6','♦3','♣8','♠j','♣2');
	expect(CompareHands.isFullHouse(hand)).toBeFalsy();
}) ;