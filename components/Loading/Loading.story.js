import React from 'react';
import { storiesOf } from '@storybook/react';
import Loading from './Loading';
import img from "../../static/loading.gif"

storiesOf('Loading', module)
    .add('Pequeno (20px)', () => (
        <Loading width={20} img={img} />
    ))
    .add('Medio (60px)', () => (
        <Loading width={60} img={img} />
    ))
    .add('Grande (100px)', () => (
        <Loading width={100} img={img} />
    ))
