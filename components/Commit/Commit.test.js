import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

// Components
import Commit from './Commit';
import Text from "../Text/Text";
import TextTitle from "../TextTitle/TextTitle";
import TextParagraph from "../TextParagraph/TextParagraph";
import moment from "moment/moment";
import mock from "./mock.json"


function setup(props) {
    const wrapper = shallow(<Commit {...props} />);
    return { wrapper };
}


const commit = mock;


describe('Commit Test Suite', () => {
    it('Titulo do commit', () => {
        const { wrapper } = setup({commit});
        expect(wrapper.find(TextTitle).text()).toBe(commit.sha);
    });
    it('Mensagem do commit', () => {
        const { wrapper } = setup({commit});
        expect(wrapper.find(TextParagraph).text()).toBe(commit.commit.message);
    });
    it('Nome do autor do commit', () => {
        const { wrapper } = setup({commit});
        expect(wrapper.find(Text).at(0).text().trim()).toBe(commit.commit.author.name);
    });
    it('Data do commit', () => {
        const { wrapper } = setup({commit});
        expect(wrapper.find(Text).at(2).text().trim()).toBe(moment(commit.commit.author.date).format('llll'));
    });

    it('Snapshot', () => {
        const tree = renderer.create(<Commit commit={commit}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
