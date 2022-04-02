import { Menu } from '../domain/Menu'
import { getSummary } from '../hooks/getSummary'
import styled from 'styled-components'

type Props = {
  result: Menu[]
}

export const Summary: React.FC<Props> = (props) => {
  const result = props.result

  if (!result.length) return <div></div>

  const [totalPrice, totalCalorie, totalSalt] = getSummary(result)

  return (
    <div className="summary">
      <div className="summary-label">
        <h2>合計</h2>
      </div>
      <div className="summary-content">
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
      </div>
    </div>
  )
}

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
