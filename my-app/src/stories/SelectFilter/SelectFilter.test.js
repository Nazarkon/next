import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SelectFilter from './SelectFilter';
import { userEvent } from '@storybook/testing-library';

describe('SelectFilter component', () => {
  const mockFilterOptions = [
    {
      id: '1',
      label: 'RELEASE DATE',
      value: 'date'
    },
    {
      id: '2',
      label: 'TITLE',
      value: 'title'
    }
  ];
  it('Matches snapshot', () => {
    const { container } = render(
      <SelectFilter
        filterOptions={mockFilterOptions}
        currentSelectedType={mockFilterOptions[0].value}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('Check that label and options renders correctly', () => {
    const { getByLabelText, getAllByRole } = render(
      <SelectFilter
        filterOptions={mockFilterOptions}
        currentSelectedType={mockFilterOptions[0].value}
      />
    );

    const label = getByLabelText('SORT BY:');
    expect(label).toBeInTheDocument();

    const options = getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('RELEASE DATE');
    expect(options[1]).toHaveTextContent('TITLE');
  });

  it('Check that onChange handler calls when option is selected', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SelectFilter
        filterOptions={mockFilterOptions}
        currentSelectedType={mockFilterOptions[0].value}
        onChange={handleChange}
      />
    );

    const select = getByRole('combobox');
    userEvent.selectOptions(select, 'date');

    expect(handleChange).toHaveBeenCalledWith('date');
  });
});
