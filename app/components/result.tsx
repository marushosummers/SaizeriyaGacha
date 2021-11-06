
import { Menu } from '../domain/Menu';
import { Card } from './card';

type Props = {
  result: Menu[];
}

export const Result: React.FC<Props> = (props) => {
  const result = props.result;
  return (
    <div id="result" className="result">
      {result.map((menu, index) => (
        <Card key={index} menu={menu} />
      ))}
    </div>
	);
}
