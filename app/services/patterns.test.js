import patterns from './patterns';

describe('Patterns', () => {
  const strongPassword = new RegExp(patterns.strongPassword);

  test('strongPassword', () => {
    expect(
      strongPassword.test('a0%[Has.'),
    ).toEqual(true);

    expect(
      strongPassword.test('a0%Has.'),
    ).toEqual(false);

    expect(
      strongPassword.test('a0%[has.'),
    ).toEqual(false);

    expect(
      strongPassword.test('az%[has.'),
    ).toEqual(false);

    expect(
      strongPassword.test('A0%[HAS.'),
    ).toEqual(false);
  });
});
