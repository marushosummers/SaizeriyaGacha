import { Menu } from '../domain/Menu'
import { Item } from './item'

type Props = {
  result: Menu[]
}

export const Items: React.FC<Props> = (props) => {
  const result = props.result
  if (!result.length) return <div></div>

  return (
    <div className="items">
      {result.map((menu, index) => (
        <Item key={index} menu={menu} />
      ))}
    </div>
  )
}
