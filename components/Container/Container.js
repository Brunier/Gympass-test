import styled from 'styled-components';
import { keyframes } from 'styled-components';
import React from 'react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


const Container = styled.div`
    animation-duration: 2s;
    animation-name: ${fadeIn};
    padding: 15px 30px;
`

export default Container;

