import styled from "styled-components";

export const InputTextWrapper = styled.div`
  & input {
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 4px; // --radius-xs
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};

    &::placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      line-height: 1.71429; /* 24px*/
      color: ${({ theme }) => theme.colors.textPlaceholder};
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

    &.xs {
      padding: 2px 12px;
      font-size: 12px;
      line-height: 1.66667; /* 20px */
    }

    &.sm {
      padding: 8px 12px;
      font-size: 12px;
      line-height: 1.66667;
    }

    &.lg {
      padding: 8px 12px 8px 16px;
      font-size: 14px;
      line-height: 1.71429; /* 24px */
    }

    &.xl {
      padding: 12px 12px 12px 16px;
      font-size: 14px;
      line-height: 1.71429; /* 24px */
    }
  }

  .invisible-border {
    border: 1px solid transparent;
  }
`;
