import { Menu } from '../domain/Menu'
import { getSummary } from '../hooks/getSummary'

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
            <span className="total-price">
              {totalPrice.toLocaleString()} 円
            </span>
          </li>
          <li>
            <span className="total-cal">
              {totalCalorie.toLocaleString()} kcal
            </span>
          </li>
          <li>
            <span className="total-solt">
              塩分 {totalSalt.toLocaleString()} g
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
