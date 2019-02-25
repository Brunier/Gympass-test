import React from 'react';
import { storiesOf } from '@storybook/react';
import TextError from './TextError';


storiesOf('TextError', module)
    .add('Normal', () => (
        <TextError>Texto Error</TextError>
    ))
