import React from 'react';
import { storiesOf } from '@storybook/react';
import TextIndex from './TextIndex';


storiesOf('TextIndex', module)
    .add('Normal', () => (
        <TextIndex>Texto Index</TextIndex>
    ))
