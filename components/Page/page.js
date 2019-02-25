import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Background from '../Backgroud/Background'
import Container from "../Container/Container";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;


const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <GlobalStyle />
                        <Background top={true} />
                        <Container>
                            <Page />
                        </Container>
                        <Background />
                    </Provider>
                )
            }
        }
    )
}
export default page;
