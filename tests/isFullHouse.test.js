const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that FullHouse returns truthy is full house', () => {
	let hand = new Hand('♥6','♦6','♣6','♠K','♣K');
	except(CompareHands.isFullHouse(hand)).toBeTruthy();
}) ;

test('Check that FullHouse returns falsy is not full house', () => {
	let hand = new Hand('♥6','♦6','♣6','♠K','♣K');
	except(CompareHands.isFullHouse(hand)).toBeFalsy();
}) ;