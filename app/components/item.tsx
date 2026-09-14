import { Menu } from '../domain/Menu'
import styled from 'styled-components'
import { device } from './styled/media'

type Props = {
  menu: Menu
}

export const Item: React.FC<Props> = (props) => {
  const menu = props.menu
  const threshold = 15
  return (
    <Card>
      <OrderLabel>{menu.order_code}</OrderLabel>
      {menu.name.length < threshold && <MenuName>{menu.name}</MenuName>}
      {menu.name.length >= threshold && (
        <MenuNameSmall>{menu.name}</MenuNameSmall>
      )}
      <p>
        {menu.price}円 {menu.calorie}kcal 塩分 {Math.round(menu.salt * 10) / 10}{' '}
        g
      </p>
    </Card>
  )
}

const OrderLabel = styled.h3`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0px;
  padding: 2px 8px;
  margin: 0;
  min-height: 18px;
  line-height: 18px;
  font-size: 12px;
  letter-spacing: 0.04em;
  font-weight: 700;
  color: white;
  font-style: normal;
  background: #007c00;
  box-shadow: 0 2px 2px rgba(0, 80, 0, 0.25);

  @media ${device.laptop} {
    padding: 0 12px;
    min-height: 24px;
    line-height: 24px;
    font-size: 0.85em;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 64px;
  margin: 0.5em 0;
  border-left: solid 6px rgba(0, 124, 0, 1);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);
  padding: 0.5em 1em;
  background: #e5f2e5;

  span {
    display: inline-block;
  }
  p {
    color: #848484;
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  h2 {
    color: #d70002;
    margin: 0;
    padding: 0;
  }
`

const MenuName = styled.h2`
  font-size: 1.2em;
`
const MenuNameSmall = styled.h2`
  font-size: 0.9em;
`
