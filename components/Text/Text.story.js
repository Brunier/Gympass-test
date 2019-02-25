import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';


storiesOf('Text', module)
    .add('Normal', () => (
        <Text>Texto Normal</Text>
    ))
    .add('FontSize x (10px)', () => (
        <Text fontSize={10}>Texto com 10px</Text>
    ))
    .add('Negrito', () => (
        <Text bold={true}>Texto em Negrito</Text>
    ))
