import * as React from 'react';
import { shallow } from 'enzyme';

import { CurrencyMeter } from '../../src/currencyMeter/CurrencyMeter';

describe('CurrencyMeter component', () => {

  let wrapper;

  describe('given no inital props', () => {

    beforeEach(() => {
      wrapper = shallow(<CurrencyMeter />)
    });

    it('should render empty values for min and max', () => {
      expect(wrapper.find('.min').text()).to.equal('-');
      expect(wrapper.find('.max').text()).to.equal('-');
    });

  });

  describe('Given a set of intial props', () => {

    beforeEach(() => {
      const props = generateMockData();
      wrapper = shallow(<CurrencyMeter {...props} />)
    });

    it('should render the correct min and max values and currency symbol', () => {
      expect(wrapper.find('.min').text()).to.equal('£0');
      expect(wrapper.find('.max').text()).to.equal('£200');
    });

    it('should render the correct currency based on the passed in currency', () => {
      expect(wrapper.find('.value').text()).to.equal('£34');
    });

  });

});

function generateMockData() {
  return {
    value: 34,
    min: 0,
    max: 200,
    format: 'currency',
    unit: 'GBP'
  }
}
