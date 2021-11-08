import { Menu } from "../domain/Menu";

type Props = {
  menu: Menu;
}

export const Item: React.FC<Props> = (props) => {
  const menu = props.menu;
  return (
    <div className="card menu">
      <h3 className="ribbon">
        {menu.order_code}
      </h3>
      <h2>{menu.name}</h2>
      <p>
        {menu.price}円  {menu.calorie}kcal  塩分 {Math.round(menu.salt * 10) / 10} g
      </p>
    </div>
  );
}
