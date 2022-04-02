import { Menu } from '../domain/Menu'

type Props = {
  menu: Menu
}

export const Item: React.FC<Props> = (props) => {
  const menu = props.menu
  const threshold = 15
  return (
    <div className="card menu">
      <h3 className="ribbon">{menu.order_code}</h3>
      {menu.name.length < threshold && (
        <h2 className="menuName">{menu.name}</h2>
      )}
      {menu.name.length >= threshold && (
        <h2 className="menuNameSmall">{menu.name}</h2>
      )}
      <p>
        {menu.price}円 {menu.calorie}kcal 塩分 {Math.round(menu.salt * 10) / 10}{' '}
        g
      </p>
    </div>
  )
}
