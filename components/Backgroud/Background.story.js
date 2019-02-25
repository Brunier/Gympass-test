import React from 'react';
import { storiesOf } from '@storybook/react';
import Background from './Background';

storiesOf('Background', module)
    .add('Top', () => (
        <Background top={true}/>
    ))
    .add('Bottom', () => (
        <Background top={false}/>
    ))
