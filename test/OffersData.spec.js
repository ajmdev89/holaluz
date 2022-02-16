import { shallowMount } from '@vue/test-utils'
import OffersData from '~/components/OffersData.vue'

const mockData = {
  discount: 1,
  cups: 1234,
  address: 'foo'
}

const mockDataNoDiscount = {
  discount: 0,
  cups: 1234,
  address: 'foo'
}

describe('OffersData component -----OffersData.vue-----', () => {
  let wrapper

  it('is a Vue instance', () => {
    const wrapper = shallowMount(OffersData, { propsData: { offer: mockData } })
    expect(wrapper.vm).toBeTruthy()
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('it should render offer data with no discount', () => {
    const wrapper = shallowMount(OffersData, { propsData: { offer: mockDataNoDiscount } })
    const messageWrapper = wrapper.find('p')

    expect(messageWrapper.text()).toBe('Cumples las condiciones para unirte a la revolución de los tejados')
  })

  it('it should render offer data with discount', () => {
    const wrapper = shallowMount(OffersData, { propsData: { offer: mockData } })
    const messageWrapper = wrapper.find('span')

    expect(messageWrapper.text()).toBe(`${mockData.discount}%`)
  })
})
