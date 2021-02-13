import React from 'react';
import styled from 'styled-components';

const ScrollIndicatorContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 30px var(--margin-y);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScrollIndicatorText = styled.div`
  writing-mode: vertical-rl;
  margin-bottom: 15px;
`;

const ScrollIndicatorBar = styled.div`
  position: relative;
  height: 50px;
  width: 3px;

  &:after {
    content: '';
    position: absolute;
    background: var(--primary-color);
    border-radius: 5px;
    width: 100%;
    animation: scroll 2s infinite;

    @keyframes scroll {
      0% {
        top: 0px;
        height: 3px;
        opacity: 0;
      }
      20% {
        top: 0px;
        height: 3px;
        opacity: 1;
      }
      50% {
        top: 0px;
        height: 100%;
      }
      80% {
        top: calc(100% - 3px);
        height: 3px;
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const ScrollIndicator = () => {
  return (
    <ScrollIndicatorContainer>
      <ScrollIndicatorText>Scroll</ScrollIndicatorText>
      <ScrollIndicatorBar />
    </ScrollIndicatorContainer>
  );
};

export default ScrollIndicator;
