import styled from 'styled-components'
import { device } from './meida'

export const Frame = styled.div`
  display: flex;
  margin: 0 5px;
  padding: 2px 10px;
  border: 5px double #007c00;
  background: white;
  width: 90vw;
  min-height: 97vh;

  @media ${device.laptop} {
    margin: 0 auto;
    width: 600px;
    border-bottom: none;
    border-top: none;
    border-right: 5px double #007c00;
    border-left: 5px double #007c00;
    padding: 1em;
    background: white;
  }
`
