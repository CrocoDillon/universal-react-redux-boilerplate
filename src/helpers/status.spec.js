/* eslint-env mocha */
/* global expect, sinon */
import status, { rewind } from './status'

describe('HTTPStatus helper', () => {

  beforeEach(() => {
    rewind() // Ensure a fresh start
  })

  it('defaults to 200', () => {
    expect(rewind()).to.be.equal(200)
  })

  it('allows you to overwrite status', () => {
    status(400)
    expect(rewind()).to.be.equal(400)
    status(404)
    expect(rewind()).to.be.equal(404)
    status(500)
    expect(rewind()).to.be.equal(500)
  })

  it('defaults back to 200 after rewind', () => {
    status(404)
    rewind()
    expect(rewind()).to.be.equal(200)
  })
})
