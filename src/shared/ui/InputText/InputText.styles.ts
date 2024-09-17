import styled from "styled-components";

export const InputTextWrapper = styled.div<{}>`
  & input {
    padding: 8px 12px; //--spacing-md=12 --spacing-lg=8
    border-radius: 4px; // --radius-xs
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    /* Text xxs/Regular */
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */

    overflow: hidden;
    text-overflow: ellipsis;

    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};

    &::placeholder {
      //overflow: hidden;
      //text-overflow: ellipsis;
      color: ${({ theme }) => theme.colors.textPlaceholder};

      /* Text sm/Regular */
      //font-family: Inter, sans-serif;
      font-size: 14px;
      //font-style: normal;
      //font-weight: 400;
      line-height: 24px; /* 171.429% */
    }

    &:hover {
      border: 1px solid #d1d1d6;
    }

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.borderBrand};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.borderShadow};
    }

    &.focus-error {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.borderError};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.borderShadowError};
    }
  }

  .invisible-border {
    border: 1px solid transparent;
  }
`;
