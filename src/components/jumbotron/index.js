import React from 'react';
import { Container, Inner, Pane, Title, SubTitle, Image } from './styles/jumbotron';
export default function Jumbotron({ children, direction = 'row', ...restProps}){
    return(
    <Inner direction={direction}>
        { children }
    </Inner>
    );
}

Jumbotron.Container = function JumboContainer({children, ...restProps}){
    return <Container { ...restProps}>{children}</Container>;
}

Jumbotron.Pane = function JumboPane({children, ...restProps}){
    return <Pane { ...restProps}>{children}</Pane>;
}

Jumbotron.Title = function JumboContainer({children, ...restProps}){
    return <Title { ...restProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumboContainer({children, ...restProps}){
    return <SubTitle { ...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumboImage({ ...restProps}){
    return <Image { ...restProps} />;
}