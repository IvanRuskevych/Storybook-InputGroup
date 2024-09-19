import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.66667; /* 20px */
  width: 100%;

  color: #51525c;

  &.text-error {
    color: #d92d20;
  }

  &.input__position--side {
    grid-area: annotation;
  }
`;
