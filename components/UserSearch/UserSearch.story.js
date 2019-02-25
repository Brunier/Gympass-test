import React from 'react';
import { storiesOf } from '@storybook/react';
import UserSearch from './UserSearch';
import img from '../../static/loading.gif'


storiesOf('UserRepos', module)
    .add('Normal', () => (
        <UserSearch  />
    ))

    .add('Loading', () => (
        <UserSearch loading={true} imgLoading={img}/>
    ))

    .add('Error', () => (
        <UserSearch error={"Aconteceu um erro :("}/>
    ))
