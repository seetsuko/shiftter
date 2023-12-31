import styled, { css } from 'styled-components'

type AlertProps = {
  variant: string
  message: string | null
  noBorder: Boolean
}

export const AlertContainer = styled.div<AlertProps>`
  width: 100%;
  max-width: 350px;
  display: flex;
  padding: 10px 20px;
  border-radius: ${(props) => (props.noBorder ? '0px' : '20px')};
  ${(props) => {
    if (props.variant === 'success') {
      return css`
        background-color: green;
        color: #fff;
      `
    }
    if (props.variant === 'warning') {
      return css`
        background-color: yellow;
      `
    }
    if (props.variant === 'error') {
      return css`
        background-color: red;
        color: #fff.;
      `
    }
  }}
`

export const IconTextWrapper = styled.div`
  display: flex;
`

export const IconWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextWrapper = styled.div`
  display: flex;
`
