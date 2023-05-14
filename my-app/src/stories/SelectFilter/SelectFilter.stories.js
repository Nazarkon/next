import React, { useState } from 'react';

import SelectFilter from './SelectFilter';

export default {
  title: 'Components/SelectFilter',
  component: SelectFilter,
  argTypes: {
    filterOptions: {
      control: 'array',
      description: 'Array of filter options',
      defaultValue: [
        {
          id: 1,
          label: 'RELEASE DATE',
          value: 'date'
        },
        {
          id: 2,
          label: 'TITLE',
          value: 'title'
        }
      ]
    },
    currentSelectedType: {
      control: 'text',
      description: 'Current selected sort type',
      defaultValue: 'title'
    }
  }
};

const Template = (args) => {
  const [currentItem, setCurrentItem] = useState(args.currentSelectedType);

  const handleChange = (value) => {
    setCurrentItem(value);
  };

  return <SelectFilter {...args} currentSelectedType={currentItem} onChange={handleChange} />;
};

export const Default = Template.bind({});
