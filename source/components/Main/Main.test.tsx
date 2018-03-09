/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';

import Main from './';

function setup() {
  const props = {
// Här kan ni mocka komponentens props om sådana finns
// typ userName: 'test'
  };

  const enzymeWrapper = shallow(<Main {...props} /> );

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  /**
   * Test component rendering. Properties of children might be tested by importing their type:
   *   import { Text } from 'react-native';
   *    const busyProps = enzymeWrapper.find(Text).props();
   *    expect(busyProps.text).toBe('test);
   */
  describe('Main', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});