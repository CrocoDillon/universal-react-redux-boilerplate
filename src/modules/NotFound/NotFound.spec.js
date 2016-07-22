/* eslint-env mocha */
/* global expect, sinon */
import React from 'react'
import { shallow } from 'enzyme'

import NotFound from './NotFound'
import { rewind } from '../../helpers/status'

describe('<NotFound />', () => {

  function setup() {
    const wrapper = shallow(<NotFound />)
    const instance = wrapper.instance()

    return { wrapper, instance }
  }

  it('renders', () => {
    const { wrapper, instance } = setup()

    expect(wrapper).to.be.ok
    expect(instance).to.be.ok
  })

  it('sets status to 404', () => {
    rewind() // Ensure a fresh start
    setup()

    const status = rewind()

    expect(status).to.be.equal(404)
  })
})
