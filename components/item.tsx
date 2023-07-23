import styled from 'styled-components'

import { device } from './styled/media'

import { Menu } from '@/domain/Menu'

type Props = {
  menu: Menu
}

export const Item: React.FC<Props> = (props) => {
  const menu = props.menu
  const threshold = 15
  return (
    <Card>
      <OrderLabel className="ribbon">{menu.order_code}</OrderLabel>
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
  padding: 0 6px;
  margin: 0;
  height: 14px;
  line-height: 14px;
  font-size: 8px;
  letter-spacing: 0.1em;
  color: white;
  font-style: normal;
  background: rgba(0, 124, 0, 0.3);
  box-shadow: 0 2px 2px rgba(0, 124, 0, 0.1);

  @media ${device.laptop} {
    padding: 0 12px;
    height: 30px;
    line-height: 30px;
    font-size: 0.8em;
  }
`

const Card = styled.div`
  display: block;
  position: relative;
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
