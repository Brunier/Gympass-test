import React from 'react';
import { storiesOf } from '@storybook/react';
import UserRepos from './UserRepos';
import mock from "./mock"


storiesOf('UserRepos', module)
    .add('Normal', () => (
        <UserRepos  repos={mock.data}/>
    ))
