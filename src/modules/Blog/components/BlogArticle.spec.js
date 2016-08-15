/* eslint-env mocha */
/* global expect, sinon */
import React from 'react'
import { shallow } from 'enzyme'

import { BlogArticle } from './BlogArticle'
import { rewind } from '../../../helpers/status'

describe('<BlogArticle />', () => {

  function setup(props) {
    props = {
      article: null,
      loading: false,
      ...props
    }

    const wrapper = shallow(<BlogArticle { ...props } />)
    const instance = wrapper.instance()

    return { wrapper, instance }
  }

  it('renders', () => {
    const { wrapper, instance } = setup()

    expect(wrapper).to.be.ok
    expect(instance).to.be.ok
  })

  it('renders article title as h1', () => {
    const article = {
      title: 'TITLE',
      body: 'BODY'
    }
    const { wrapper } = setup({ article })

    expect(wrapper.find('h1')).to.have.text(article.title)
  })

  it('sets status to 404 when an article is not found', () => {
    rewind() // Ensure a fresh start
    setup()

    const status = rewind()

    expect(status).to.be.equal(404)
  })
})
