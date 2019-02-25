import React from 'react';
import { storiesOf } from '@storybook/react';
import UserRepo from './UserRepo';
import mock from "./mock"


storiesOf('UserRepo', module)
    .add('Normal', () => (
        <UserRepo  repo={mock}/>
    ))
