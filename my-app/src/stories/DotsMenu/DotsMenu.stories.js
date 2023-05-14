import React from 'react';

import DotsMenu from './DotsMenu';

export default {
  title: 'Components/DotsMenu',
  component: DotsMenu,
  argTypes: {}
};

const Template = (args) => <DotsMenu {...args} />;

export const Default = Template.bind({});
