import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { formatUsPhoneInput, isCompleteUsPhone, toE164 } from './phone';

describe('US phone input', () => {
  it('accepts common pasted and autofilled formats', () => {
    for (const value of [
      '(253) 555-0100',
      '2535550100',
      '253-555-0100',
      '+1 (253) 555-0100',
      '+12535550100',
      '1-253-555-0100',
      '+1(253) 555-0100',
    ]) {
      assert.equal(formatUsPhoneInput(value), '(253) 555-0100', value);
      assert.equal(isCompleteUsPhone(value), true, value);
      assert.equal(toE164(value), '+12535550100', value);
    }
  });

  it('does not keep a +1 prefix and leaves an empty field empty', () => {
    assert.equal(formatUsPhoneInput(''), '');
    assert.equal(formatUsPhoneInput('+1'), '');
    assert.equal(toE164(''), '');
    assert.equal(toE164('+1'), '');
  });

  it('formats a number as it is typed', () => {
    assert.equal(formatUsPhoneInput('2'), '2');
    assert.equal(formatUsPhoneInput('253'), '253');
    assert.equal(formatUsPhoneInput('2535'), '(253) 5');
    assert.equal(formatUsPhoneInput('253555'), '(253) 555');
    assert.equal(formatUsPhoneInput('2535550100'), '(253) 555-0100');
  });

  it('rejects incomplete numbers', () => {
    assert.equal(isCompleteUsPhone('253555'), false);
    assert.equal(isCompleteUsPhone('(253) 555'), false);
    assert.equal(toE164('253-555'), '');
  });
});
