import styled from 'styled-components'

import { Items } from './items'
import { Summary } from './summary'
import { Twitter } from './twitter'
import { Menu } from '../domain/Menu'


type Props = {
  result: Menu[]
}

const StyledContainer = styled.div`
  text-align: center;
`

export const Result: React.FC<Props> = (props) => {
  const result = props.result
  if (!result.length) return <div></div>
  return (
    <StyledContainer>
      <Items result={result} />
      <Summary result={result} />
      <Twitter result={result} />
    </StyledContainer>
  )
}
