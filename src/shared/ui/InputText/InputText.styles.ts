import styled from "styled-components";

export const InputTextWrapper = styled.div`
  position: relative;
  width: fit-content;

  & input {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    border-radius: 4px;
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

    &.input--error {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.borderError};
      box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.borderShadowError};
    }

    &.xs {
      padding: 2px calc(8px + 16px + 8px + 32px + 12px) 2px
        calc(12px + 16px + 8px);
      font-size: 12px;
      line-height: 1.66667;

      &--no-search-icon {
        padding-left: 12px;
      }

      &--no-right-icons {
        padding-right: 12px;
      }

      &--only-help-icon {
        padding-right: calc(8px + 16px + 12px);
      }

      &--only-shortkey-icon {
        padding-right: calc(8px + 32px + 12px);
      }
    }

    &.sm {
      padding: 8px calc(8px + 16px + 8px + 32px + 12px) 8px
        calc(12px + 16px + 8px);
      font-size: 12px;
      line-height: 1.66667;

      &--no-search-icon {
        padding-left: 12px;
      }

      &--no-right-icons {
        padding-right: 12px;
      }

      &--only-help-icon {
        padding-right: calc(8px + 16px + 12px);
      }

      &--only-shortkey-icon {
        padding-right: calc(8px + 32px + 12px);
      }
    }

    &.lg {
      padding: 8px calc(8px + 16px + 8px + 32px + 12px) 8px
        calc(16px + 16px + 8px);
      font-size: 14px;
      line-height: 1.71429;

      &--no-search-icon {
        padding-left: 16px;
      }

      &--no-right-icons {
        padding-right: 12px;
      }

      &--only-help-icon {
        padding-right: calc(8px + 16px + 12px);
      }

      &--only-shortkey-icon {
        padding-right: calc(8px + 32px + 12px);
      }
    }

    &.xl {
      padding: 12px calc(8px + 16px + 8px + 32px + 12px) 12px
        calc(16px + 16px + 8px);
      font-size: 14px;
      line-height: 1.71429;

      &--no-search-icon {
        padding-left: 16px;
      }

      &--no-right-icons {
        padding-right: 12px;
      }

      &--only-help-icon {
        padding-right: calc(8px + 16px + 12px);
      }

      &--only-shortkey-icon {
        padding-right: calc(8px + 32px + 12px);
      }
    }
  }

  .border--invisible {
    border: 1px solid transparent;
  }

  .input__position--side {
    grid-area: input;
  }
`;
