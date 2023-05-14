import React, { useState } from 'react';

import GenreList from './GenreList';

export default {
  title: 'Components/GenreList',
  component: GenreList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    genreList: {
      control: 'array',
      description: 'Default genre array',
      defaultValue: [
        {
          id: 'all',
          name: 'All',
          is_active: false
        },
        {
          id: 'documentary',
          name: 'Documentary',
          is_active: false
        },
        {
          id: 'comedy',
          name: 'Comedy',
          is_active: false
        },
        {
          id: 'horror',
          name: 'Horror',
          is_active: false
        },
        {
          id: 'crime',
          name: 'Crime',
          is_active: false
        }
      ]
    },
    currentItem: {
      control: 'object',
      description: 'Example of props object',
      defaultValue: {
        id: 'all',
        name: 'All',
        is_active: false
      }
    }
  }
};

const Template = (args) => {
  const [currentItem, setCurrentItem] = useState(args.currentItem);

  const updateList = (item) => {
    setCurrentItem(item);
  };

  return <GenreList {...args} currentItem={currentItem} updateList={updateList} />;
};

export const Default = Template.bind({});

Default.args = {
  genreList: [
    {
      id: 'all',
      name: 'All',
      is_active: false
    },
    {
      id: 'documentary',
      name: 'Documentary',
      is_active: false
    },
    {
      id: 'comedy',
      name: 'Comedy',
      is_active: false
    },
    {
      id: 'horror',
      name: 'Horror',
      is_active: false
    },
    {
      id: 'crime',
      name: 'Crime',
      is_active: false
    }
  ],
  currentItem: {
    id: 'all',
    name: 'All',
    is_active: false
  }
};
