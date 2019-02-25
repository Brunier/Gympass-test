import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import mock from './mock'

// Components
import RepoDetails from './RepoDetails';
import Text from "../Text/Text";
import TextTitle from "../TextTitle/TextTitle";
import TextParagraph from "../TextParagraph/TextParagraph";
import moment from "moment/moment";


function setup(props) {
    const wrapper = shallow(<RepoDetails {...props} />);
    return { wrapper };
}


const repo = mock;

describe('RepoDetails Suite', () => {
    it('Titulo', () => {
        const { wrapper } = setup({repo});
        expect(wrapper.find(TextTitle).text()).toBe(repo.name);
    });
    it('Descrição', () => {
        const { wrapper } = setup({repo});
        expect(wrapper.find(TextParagraph).text()).toBe(repo.description);
    });
    it('Data de atualização', () => {
        const { wrapper } = setup({repo});
        expect(wrapper.find(Text).at(0).text().trim()).toBe(moment(repo.updated_at).format('llll'));
    });
    it('Linguagem', () => {
        const { wrapper } = setup({repo});
        expect(wrapper.find(Text).at(2).text()).toBe(repo.language);
    });
    it('Snapshot', () => {
        const tree = renderer.create(<RepoDetails repo={repo} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
