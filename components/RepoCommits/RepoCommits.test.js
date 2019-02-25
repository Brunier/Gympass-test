import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import mock from "./mock"
// Components
import RepoCommits from './RepoCommits';
import Commit from '../Commit/Commit';

function setup(props) {
    const wrapper = shallow(<RepoCommits {...props} />);
    return { wrapper };
}

const commits = mock.data;


describe('RepoCommits Test Suite', () => {
    it('Verificar a quantidade de RepoCommits', () => {
        const { wrapper } = setup({commits});
        expect(wrapper.find(Commit)).toHaveLength(commits.length);
    });

    it('Snapshot', () => {
        const tree = renderer.create(<RepoCommits commits={commits} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
