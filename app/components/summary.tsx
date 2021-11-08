
import { Menu } from '../domain/Menu';
import { getSummary } from '../hooks/getSummary';

type Props = {
  result: Menu[];
}

export const Summary: React.FC<Props> = (props) => {
  const result = props.result;

  if (!result.length) return <div></div>;

  const [totalPrice, totalCalorie, totalSalt] = getSummary(result)

    return (
      <div className="card summary">
      <h2>計 {totalPrice}円   {totalCalorie}kcal   塩分 {Math.round(totalSalt * 10) / 10}g</h2>
    </div>
	);
}
