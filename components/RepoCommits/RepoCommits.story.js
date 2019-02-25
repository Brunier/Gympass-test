import React from 'react';
import { storiesOf } from '@storybook/react';
import RepoCommits from './RepoCommits';
import mock from "./mock"


storiesOf('RepoCommits', module)
    .add('Normal', () => (
        <RepoCommits  commits={mock.data}/>
    ))
