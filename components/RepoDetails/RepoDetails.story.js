import React from 'react';
import { storiesOf } from '@storybook/react';
import RepoDetails from './RepoDetails';
import mock from "./mock"


storiesOf('RepoDetails', module)
    .add('Normal', () => (
        <RepoDetails  repo={mock}/>
    ))
