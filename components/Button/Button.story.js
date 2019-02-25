import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
    .add('Normal', () => (
        <Button disabled={false} text={"Normal"}/>
    ))
    .add('Disabled', () => (
        <Button disabled={true} text={"Disabled"}/>
    ))
