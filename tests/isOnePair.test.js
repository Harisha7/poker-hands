const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that isOnePair returns truthy is one pair', () => {
	let hand = new Hand('♥7','♥10','♣4','♠8','10♠');
	except(CompareHands.isOnePair(hand)).toBeTruthy();
})

test('Check that isOnePair returns falsy is not one pair', () => {
	let hand = new Hand('♥7','♦7','♣7','♠7','4♠');
	except(CompareHands.isOnePair(hand)).toBeFalsy();
});