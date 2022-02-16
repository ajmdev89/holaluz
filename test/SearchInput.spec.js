import { shallowMount } from '@vue/test-utils'
import SearchInput from '~/components/SearchInput.vue'

describe('SearchInput component -----SearchInput.vue-----', () => {
  const spyValidate = jest.spyOn(SearchInput.methods, 'validateCUPSData')

  it('is a Vue instance', () => {
    const wrapper = shallowMount(SearchInput)
    expect(wrapper.vm).toBeTruthy()
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(SearchInput)
    expect(wrapper).toMatchSnapshot()
  })

  it('it should render', () => {
    const wrapper = shallowMount(SearchInput)

    expect(wrapper.find('label').exists()).toBeTruthy()
    expect(wrapper.find('button').exists()).toBeTruthy()
  })

  it('it should call to validate cups', async () => {
    const wrapper = shallowMount(SearchInput)
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(spyValidate).toHaveBeenCalled()
  })
})
