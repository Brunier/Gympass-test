import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterRepo from './FilterRepo';

storiesOf('Filter Repo', module)
    .add('Normal', () => (
        <FilterRepo />
    ))
