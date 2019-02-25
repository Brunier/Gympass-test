import React from 'react';
import { storiesOf } from '@storybook/react';
import TextParagraph from './TextParagraph';


storiesOf('TextParagraph', module)
    .add('Normal', () => (
        <TextParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare ac dui sed mattis. Pellentesque placerat aliquet sapien, sed interdum diam fermentum et. Donec a ornare lorem. Aliquam a elit nulla. Mauris quam nisl, sagittis vitae metus in, hendrerit convallis velit. Sed sit amet sagittis sem. Donec at ipsum eu libero euismod commodo non nec massa. Donec tortor dui, vulputate malesuada placerat at, facilisis quis eros. Duis nec leo eu arcu lobortis accumsan. Morbi ullamcorper faucibus ornare. Nullam ut erat eget turpis gravida mattis. Integer ac ipsum iaculis orci pulvinar ultrices. Nulla sodales, nisl cursus lacinia cursus, tortor sapien pulvinar libero, sit amet maximus justo mi non elit. Maecenas aliquam dictum quam, at semper velit. In ac tortor non dui bibendum dignissim eu eu nunc. Aliquam vel rutrum odio, a blandit sapien.</TextParagraph>
    ))
