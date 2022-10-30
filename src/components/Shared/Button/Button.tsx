import React from 'react'
import styled from 'styled-components';

interface Iprops {
    iconStart?: JSX.Element;
    iconEnd?: JSX.Element;
    children: React.ReactNode
}

const StyledButton = styled.button`
    width: max-content;
    height: 50px;
    background-color: hsla(13, 75%, 58%, 1.00);
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    align-items: center;
    border-radius: 3px;
    color: white;
    transition: 1s background-color;

    
    &:hover {
        background-color: hsla(21, 86%, 67%, 1.00);
    }
`

const Button = ({ iconStart, iconEnd, children }: Iprops) => {
  return (
    <StyledButton>
        {iconStart}
        {children}
        {iconEnd}
    </StyledButton>
  )
}

export default Button