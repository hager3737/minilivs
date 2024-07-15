import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Styled-components for the round sign
const SignWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 100px;
border-radius: 50%;
background-color: black;
color: white;
font-size: 24px;
font-weight: bold;
text-align: center;
`;

const FlashingText = styled.div<{ visible: boolean }>`
opacity: ${({ visible }) => (visible ? 1 : 0)};
transition: opacity 0.4s ease-in-out;
`;

const OpenSign: React.FC = () => {
const [visible, setVisible] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setVisible((prevVisible) => !prevVisible);
  }, 1000);

  return () => clearInterval(interval);
}, []);

return (
  <SignWrapper>
    <FlashingText visible={visible}>OPEN</FlashingText>
  </SignWrapper>
);
};

export default OpenSign;