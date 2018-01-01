const assert = require('assert'),
      isIsbn = require('./is-isbn')


describe('is-isbn', () => {
  it(`should validate valid 13 digit ISBNs`, () => {
    assert.equal(isIsbn.validate('9780451524935'), true, '9780451524935 should be valid')
    assert.equal(isIsbn.validate('9781847392350'), true, '9781847392350 should be valid')
    assert.equal(isIsbn.validate('9780553803716'), true, '9780553803716 should be valid')
    assert.equal(isIsbn.validate('9780393345063'), true, '9780393345063 should be valid')
  })
  it(`should validate valid 10 digit ISBNs`, () => {
    assert.equal(isIsbn.validate('0553803719'), true, '0553803719 should be valid')
    assert.equal(isIsbn.validate('0770430074'), true, '0770430074 should be valid')
    assert.equal(isIsbn.validate('0393345068'), true, '0393345068 should be valid')
  })
  it(`should not validate invalid 13 digit ISBNs`, () => {
    assert.equal(isIsbn.validate('0000000000001'), false, '0000000000001 should be invalid')
  })
  it(`should not validate non-ISBNs`, () => {
    assert.equal(isIsbn.validate('000'), false, '000 should be invalid')
    assert.equal(isIsbn.validate('012345678910'), false, '012345678910 should be invalid')
    assert.equal(isIsbn.validate('0134572910'), false, '0134572910 should be invalid')
    assert.equal(isIsbn.validate('0123456789101'), false, '0123456789101 should be invalid')
  })
})