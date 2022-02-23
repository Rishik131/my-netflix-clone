import React from 'react';
import { Container, Inner } from './styles/jumbotron';
export default function Jumbotron({ children, direction = 'row', ...restProps}){
    return(
    <Inner direction={direction}>
        <p>i am jumbo</p>
    </Inner>
    );
}

Jumbotron.Container = function JumboContainer({children, ...restProps}){
    return <Container { ...restProps}>{children}</Container>
}