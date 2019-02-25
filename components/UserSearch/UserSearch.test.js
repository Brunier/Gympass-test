import React from 'react';
import { shallow } from 'enzyme';
import TextError from '../TextError/TextError';
import Loading from '../Loading/Loading';
import renderer from 'react-test-renderer'

// Components
import UserSearch from './UserSearch';

function setup(props) {
    const wrapper = shallow(<UserSearch {...props} />);
    return { wrapper };
}

describe('UserSearch Test Suite', () => {
    it('Com nome vazio, o botão tem que estar desabilitado', () => {
        const { wrapper } = setup();
        wrapper.setState({ userName: '' });
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').prop("disabled")).toBe(true);
    });
    it('Com nome, o botão tem que estar habilitado', () => {
        const { wrapper } = setup();
        wrapper.setState({ userName: 'gympass' });
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').prop("disabled")).toBe(false);
    });
    it('Mostrar mensagem de erro', () => {
        const { wrapper } = setup({error: true});
        expect(wrapper.find(TextError).exists()).toBe(true);
    });
    it('Não mostrar a mensagem de erro', () => {
        const { wrapper } = setup({error: false});
        expect(wrapper.find(TextError).exists()).toBe(false);
    });
    it('Loading', () => {
        const { wrapper } = setup({loading: true});
        expect(wrapper.find(Loading).exists()).toBe(true);
    });
    it('Sem Loading', () => {
        const { wrapper } = setup({loading: false});
        expect(wrapper.find(Loading).exists()).toBe(false);
    });
    it('Snapshot', () => {
        const tree = renderer.create(<UserSearch />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
