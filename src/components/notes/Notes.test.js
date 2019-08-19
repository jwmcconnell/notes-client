import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';

describe('Notes component', () => {
  it('renders Notes', () => {
    const wrapper = shallow(<Notes 
      notesData={[]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
