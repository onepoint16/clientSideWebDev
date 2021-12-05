import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from './List'

Enzyme.configure({ adapter: new Adapter() })

describe('List', () => {
    it('should render a list with the body of each item inside a div', () => {
    
        const itemsArray = [{ id: 1, body: 'Shopping' }, { id: 2, body:'Exercise'}, { id: 3, body: 'Cook' }]

        const wrapper = shallow(<List items={itemsArray} />)

        const items = wrapper.find('div[className="item"]')

        expect(items).toHaveLength(3)

        expect(items.first().text()).toEqual('Shopping')
    })
})