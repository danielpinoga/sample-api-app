import styled from 'styled-components'

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

export const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 827px;
  height: 485px;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`