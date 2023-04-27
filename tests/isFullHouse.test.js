const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('test that FullHouse returns truthy is full house', () => {
	let hand = new Hand('♠6','♥6','♦6','♣K','♥K' );
	expect(CompareHands.isFullHouse(hand)).toBeTruthy();
}) 

test('test that FullHouse returns falsy is not full house', () => {
	let hand = new Hand('♥6','♦3','♣8','♠j','♣2');
	expect(CompareHands.isFullHouse(hand)).toBeFalsy();
}) ;

test('test that falsy FullHouse returns 0', () => {
	let hand = new Hand('♥6','♦3','♣8','♠j','♣2');
	expect(CompareHands.isFullHouse(hand)).toBe(0);
}) ;

test('test that isFullHouse returns a higher score for a stronger hand (if two hands but with full house)', () => {
  let hand1 = new Hand('♠6','♥6','♦6','♣K','♥K');
  let hand2 = new Hand('♥6','♦3','♣8','♠j','♣2');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});