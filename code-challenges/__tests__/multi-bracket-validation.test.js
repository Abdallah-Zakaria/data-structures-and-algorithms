'use strict';

const multiBracketValidation = require('../401/multiBracketValidation/multi-bracket-validation');

describe('toBeTruthy', () => {
  it('1', () => {
    expect(multiBracketValidation('(){[Extra Characters]}')).toBeTruthy();
  });
  it('2', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
  });
  it('3', () => {
    expect(multiBracketValidation('{}{}{}')).toBeTruthy();
  });
  it('4', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
});

describe('toBeFalsy', () => {
  it('1', () => {
    expect(multiBracketValidation('{')).toBeFalsy();
  });
  it('2', () => {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
  });
  it('3', () => {
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
  it('4', () => {
    expect(multiBracketValidation(')')).toBeFalsy();
  });
  it('5', () => {
    expect(multiBracketValidation('[}')).toBeFalsy();
  });
  it('6', () => {
    expect(multiBracketValidation(')')).toBeFalsy();
  });
  it('7', () => {
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
});
