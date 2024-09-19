import styled from "styled-components";

export const InputGroupContainer = styled.div`
  display: grid;
  gap: 4px;

  grid-template-areas:
    "label"
    "input"
    "annotation";

  &.position--side {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "label input"
      "empty annotation";
    grid-column-gap: 8px;
  }
`;
