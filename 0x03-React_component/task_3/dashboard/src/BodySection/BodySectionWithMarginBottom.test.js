import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders <BodySection /> component correctly with passed props', () => {
    const title = 'Test Title';
    const text = 'Test children text';
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        <p>{text}</p>
      </BodySectionWithMarginBottom>
    );

    // Check if BodySection is rendered
    expect(wrapper.find(BodySection).exists()).toBe(true);

    // Check if the title prop is passed correctly to BodySection
    expect(wrapper.find(BodySection).prop('title')).toEqual(title);

    // Check if children are passed correctly to BodySection
    expect(wrapper.find(BodySection).contains(<p>{text}</p>)).toBe(true);
  });
});

