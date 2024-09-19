// import styled from "styled-components";
//
// export const InputGroupContainer = styled.div`
//   display: grid;
//   gap: 4px;
//   width: 300px;
//
//   grid-template-columns: 1fr;
//   grid-template-rows: auto auto auto; /* InputLabel, InputText, InputAnnotation */
//
//   &.position--side {
//     grid-template-columns: 1fr 2fr; /* InputLabel - left, InputText - right */
//     grid-template-rows: auto auto; /* first row for InputLabel + InputText, second for - InputAnnotation */
//     gap: 8px;
//     width: 100%;
//   }
// `;

import styled from "styled-components";

export const InputGroupContainer = styled.div`
  display: grid;
  gap: 4px;
  width: 300px;

  /* Основне компонування з використанням grid-area */
  grid-template-areas:
    "label"
    "input"
    "annotation";

  //.input-text {
  //  grid-area: input;
  //}

  &.position--side {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "label input"
      "annotation annotation";
    gap: 8px;
    width: 100%;
  }
`;
