import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';
import img from '../../static/loading.gif'


storiesOf('Search', module)
    .add('Normal', () => (
        <Search btnText={"Procurar Repositórios"} placeholder={"Gympass"} />

))

    .add('Loading', () => (
        <Search  btnText={"Procurar Repositórios"} placeholder={"Gympass"} loading={true} imgLoading={img}/>
    ))

    .add('Error', () => (
        <Search btnText={"Procurar Repositórios"} placeholder={"Gympass"}  error={"Aconteceu um erro :("}/>
    ))

    .add('Com Label', () => (
        <Search label={"Github.com/"} btnText={"Procurar Repositórios"} placeholder={"Gympass"}  error={"Aconteceu um erro :("}/>
    ))
