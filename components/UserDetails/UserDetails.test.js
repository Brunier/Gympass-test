import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import mock from './mock'

// Components
import UserDetails from './UserDetails';
import Text from "../Text/Text";


function setup(props) {
    const wrapper = shallow(<UserDetails {...props} />);
    return { wrapper };
}


const user = mock;


describe('UserDetails Test Suite', () => {
    it('Imagem do usuário', () => {
        const { wrapper } = setup({user});
        expect(wrapper.find("img").prop("src")).toBe(user.img);
    });
    it('Nome do usuário', () => {
        const { wrapper } = setup({user});
        expect(wrapper.find(Text).at(0).text()).toBe(user.name);
    });
    it('Quantidade de repositórios', () => {
        const { wrapper } = setup({user});
        expect(wrapper.find(Text).at(2).text().trim()).toBe(`Mostrando ${user.repos.length} repositórios no total`);
    });

    it('Snapshot', () => {
        const tree = renderer.create(<UserDetails user={user}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
