import React from 'react';
import { storiesOf } from '@storybook/react';
import Commit from './Commit';
import mock from './mock'

storiesOf('Commit', module)
    .add('Normal', () => (
        <Commit commit={mock} />
    ))
