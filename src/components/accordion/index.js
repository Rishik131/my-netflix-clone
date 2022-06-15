import React,{useState} from "react";
import { Container } from "../footer/styles/footer";
export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({children, ...resProps}){
    return <Title {...restProps}>{children}</Title>
};

Accordion.Frame = function AccordionFrame({children, ...resProps}){
    return <Frame {...restProps}>{children}</Frame>
};

Accordion.Item = function AccordionItem({children, ...resProps}){
    return <Item {...restProps}>{children}</Item>
};