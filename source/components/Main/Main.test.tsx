/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';
import Progress from '../Progress';
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

  describe('Main', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();

      const progress = enzymeWrapper.find(Progress).props();
      expect(progress.amount).toBe(0);

    });
  });
});