import React from 'react';

import MovieCard from './MovieCard';

import filmImage from '../assets/images/Bitmap.png';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'Image url that should be a string',
      defaultValue: filmImage
    },
    name: {
      control: 'text',
      description: 'Film title',
      defaultValue: 'Pulp Fiction'
    },
    year: {
      control: 'text',
      description: 'Should be a year when film was presented',
      defaultValue: '2003'
    },
    genreList: {
      control: 'array',
      describe: 'List of genres that connected to this film',
      defaultValue: ['Action', 'Adventure']
    },
    handleClick: {
      action: 'clicked'
    }
  }
};

const Template = (args) => (
    <MovieCard {...args} />
);

export const Default = Template.bind({});
