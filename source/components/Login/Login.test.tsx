/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';
// import TextInput till react
import { TextInput } from 'react-native';
import Login from '../Login';

jest.unmock('react-native');

function setup() {
  const props = {
// Här kan ni mocka komponentens props om sådana finns
// typ userName: 'test'
  };

    const enzymeWrapper = shallow(<Login {...props} /> );

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

      const login = enzymeWrapper.find(TextInput).at(1).props;
      expect(login.placeholder).toBe('Password');
    });
  });
});