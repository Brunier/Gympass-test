import React from 'react';
import { storiesOf } from '@storybook/react';
import TextTitle from './TextTitle';


storiesOf('TextTitle', module)
    .add('Normal', () => (
        <TextTitle>Titulo</TextTitle>
    ))
    .add('Titulo cortado', () => (
        <TextTitle>Titulooooooooo muitooooooooooo grandeeeeeeee: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare ac dui sed mattis. Pellentesque placerat </TextTitle>
    ))
