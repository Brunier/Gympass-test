import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import mock from './mock';

// Components
import UserRepos from './UserRepos';
import UserRepo from '../UserRepo/UserRepo';
import moment from "moment/moment";

function setup(props) {
    const wrapper = shallow(<UserRepos {...props} />);
    return { wrapper };
}

const repos = mock.data;

describe('UserSearch Test Suite', () => {
    it('Verificar a quantidade de UserRepo', () => {
        const { wrapper } = setup({repos});
        expect(wrapper.find(UserRepo)).toHaveLength(repos.length);
    });

    it('Snapshot', () => {
        const tree = renderer.create(<UserRepos repos={repos} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
