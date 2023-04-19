const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Check that FourOfAKind returns truthy is four of a kind', () => {
	let hand = new Hand('♥7','♦7','♣7','♠7','4♠');
	except(CompareHands.isFourOfAKind(hand)).toBeTruthy();
})


test('Check that FourOfAKind returns falsy is not four of a kind', () => {
	let hand = new Hand('♥7','♦7','♣7','♠7','4♠');
	except(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});