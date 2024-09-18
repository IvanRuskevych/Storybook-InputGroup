import styled from "styled-components";

export const InputTextWrapper = styled.div`
  position: relative;
  min-width: 250px;

  & input {
    width: 100%;
    box-sizing: border-box; // TODO check reset styles
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
      padding: 2px 77px 2px 37px;
      font-size: 12px;
      line-height: 1.66667; /* 20px */
    }

    &.sm {
      padding: 8px 77px 8px 37px;
      font-size: 12px;
      line-height: 1.66667;
    }

    &.lg {
      padding: 8px 77px 8px 41px;
      font-size: 14px;
      line-height: 1.71429; /* 24px */
    }

    &.xl {
      padding: 12px 77px 12px 41px;
      font-size: 14px;
      line-height: 1.71429; /* 24px */
    }
  }

  .invisible-border {
    border: 1px solid transparent;
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.colors.fillSvg};

    &__search {
      left: 12px;
      width: 16px;
      height: 16px;

      &--lg {
        left: 16px;
      }

      &--xl {
        left: 16px;
      }

      &--error {
        fill: ${({ theme }) => theme.colors.fillSvgError};
      }
    }

    &__help {
      right: 53px;
      width: 16px;
      height: 16px;

      &--lg {
        right: 57px;
      }

      &--xl {
        right: 57px;
      }

      &--error {
        fill: ${({ theme }) => theme.colors.fillSvgError};
      }
    }

    &__shortkey {
      right: 13px;
      width: 32px;
      height: 20px;

      &--lg {
        right: 16px;
      }

      &--xl {
        right: 16px;
      }
    }
  }
`;
