/* eslint-env mocha */
/* global expect, sinon */
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('<App />', () => {

  function setup() {
    const wrapper = shallow(<App route={ {} } />)
    const instance = wrapper.instance()

    return { wrapper, instance }
  }

  it('renders', () => {
    const { wrapper, instance } = setup()

    expect(wrapper).to.be.ok
    expect(instance).to.be.ok
  })
})
