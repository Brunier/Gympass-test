import React from 'react';
import { shallow } from 'enzyme';
import TextError from '../TextError/TextError';
import Loading from '../Loading/Loading';
import renderer from 'react-test-renderer'
import Button from '../Button/Button'

// Components
import Search from './Search';

function setup(props) {
    const wrapper = shallow(<Search {...props} />);
    return { wrapper };
}

describe('Search Test Suite', () => {
    it('Com nome vazio, o botão tem que estar desabilitado', () => {
        const { wrapper } = setup();
        wrapper.setState({ item: '' });
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find(Button).prop("disabled")).toBe(true);
    });
    it('Com nome, o botão tem que estar habilitado', () => {
        const { wrapper } = setup();
        wrapper.setState({ item: 'gympass' });
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find(Button).prop("disabled")).toBe(false);
    });
    it('Botão desabilitado', () => {
        const { wrapper } = setup({disabled: true});
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find(Button).prop("disabled")).toBe(true);
    });
    it('Botão habilitado', () => {
        const { wrapper } = setup({disabled: false});
        //expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find(Button).prop("disabled")).toBe(false);
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
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
