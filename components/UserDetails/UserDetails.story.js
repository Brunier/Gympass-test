import React from 'react';
import { storiesOf } from '@storybook/react';
import UserDetails from './UserDetails';


storiesOf('UserDetails', module)
    .add('Normal', () => (
        <UserDetails />

    ))
