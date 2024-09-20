import styled from "styled-components";

export const StyledIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: ${({ theme }) => theme.colors.fillSvg};

  &.search {
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

  &.help {
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

    &__alone {
      right: 13px;

      &--lg {
        right: 17px;
      }

      &--xl {
        right: 17px;
      }
    }
  }

  &.shortkey {
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

  &.info {
    position: unset;
    top: unset;
    transform: unset;
    width: 12px;
    height: 12px;
    fill: ${({ theme }) => theme.colors.fillSvg};
  }
`;
