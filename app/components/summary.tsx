import { Menu } from '../domain/Menu'
import { getSummary } from '../hooks/getSummary'
import styled from 'styled-components'
import { device } from './styled/meida'

type Props = {
  result: Menu[]
}

export const Summary: React.FC<Props> = (props) => {
  const result = props.result

  if (!result.length) return <div></div>

  const [totalPrice, totalCalorie, totalSalt] = getSummary(result)

  return (
    <SummaryWrapper>
      <SummaryLabel>
        <h2>合計</h2>
      </SummaryLabel>
      <SummaryContent>
        <ul>
          <li>
            <Price>{totalPrice.toLocaleString()} 円</Price>
          </li>
          <li>
            <Calorie>{totalCalorie.toLocaleString()} kcal</Calorie>
          </li>
          <li>
            <Salt>塩分 {totalSalt.toLocaleString()} g</Salt>
          </li>
        </ul>
      </SummaryContent>
    </SummaryWrapper>
  )
}

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: dashed 2px rgba(0, 124, 0, 1);
  margin: 1em 0;
  padding: 1em 4em;
  color: #d70002;

  @media ${device.laptop} {
    margin: 1em auto;
    max-width: 300px;
  }
`
const SummaryLabel = styled.div`
`
const SummaryContent = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: right;
  }

  @media ${device.laptop} {
  span {
    font-size: 1.5em;
    font-weight: bold;
  }
  }
`
const Price = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`
const Calorie = styled.span`
  font-size: 1.2em;
`
const Salt = styled.span`
  font - size: 1.2em;
`
