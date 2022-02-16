import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Landing from '~/pages/index.vue'

describe('OffersData component -----OffersData.vue-----', () => {
  let wrapper
  let store

  Vue.use(Vuex)

  beforeEach(() => {
    store = new Store({
      actions: {
        getOffers: jest.fn()
      }
    })

    wrapper = shallowMount(Landing, {
      store
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('it should render', () => {
    expect(wrapper.find('h1').exists()).toBeTruthy()
    expect(wrapper.find('.bg-gradient-to-r').exists()).toBeTruthy()
  })

  it('it should render without offer section', () => {
    expect(wrapper.find('.bg-white').exists()).toBeFalsy()
  })
})
