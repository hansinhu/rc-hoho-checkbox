import React from 'react';
import { render/*, mount*/ } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Checkbox from '../src';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Checkbox checked={true}/>
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
