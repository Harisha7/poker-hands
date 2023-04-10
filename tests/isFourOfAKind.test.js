const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FourOfAKind returns truthy is four of a kind', () => {
	let hand = new Hand('♥7','♦7','♣7','♠7','4♠');
	except(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});