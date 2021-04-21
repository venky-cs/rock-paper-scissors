import {randomNumber,check} from './utils'

test('generateRandomNumber btw 0 to 2', () => {
    expect(randomNumber(0,2)).toBeLessThan(3)
})

test('validate picks if passed', () => {
    expect(check('rock','scissors')).toBe('you won')
    expect(check('scissors','paper')).toBe('you won')
})

test('validate picks if failed', () => {
    expect(check('rock','paper')).toBe('you lose')
    expect(check('paper','scissors')).toBe('you lose')
})
test('validate picks if draw', () => {
    expect(check('rock','rock')).toBe('draw')
    expect(check('paper','paper')).toBe('draw')
    expect(check('scissors','scissors')).toBe('draw')
})