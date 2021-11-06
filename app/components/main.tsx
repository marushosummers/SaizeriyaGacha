import { useState } from 'react';
import { Result } from '../components/result'
import { Menu } from '../domain/Menu';
import { MENUS } from '../hooks/menu.json';
import useInput from '../hooks/useInput';

type Order = { value: string, display: string };

export const Main: React.FC = () => {
  const [result, useResult] = useState([])
  const [input, handleInputChange] = useInput(1000)
  const [order, useOrder] = useState({ value: 'yen', display: '円'})

  const doGacha = (budget: number, order: Order): Menu[] => {
    const result: Menu[] = [];
    let left = budget

    if (order.value === 'yen') {
      while (left <= budget) {
        const candidates = MENUS.filter(menu => menu.price <= left)
        if (!candidates.length) break;
        const randNum = Math.floor(Math.random() * candidates.length);
        const food = candidates[randNum];
        left -= food.price
        result.push(food);
      }
    } else {
      while (left <= budget) {
        const candidates = MENUS.filter(menu => menu.calorie <= left && menu.calorie > 0)
        if (!candidates.length) break;
        const randNum = Math.floor(Math.random() * candidates.length);
        const food = candidates[randNum];
        left -= food.calorie
        result.push(food);
      }
    }

    return result;
  }

  const handleOrder = () => {
    switch (order.value) {
      case "yen":
        useOrder({ value: 'kcal', display: 'kcal' })
        break;
      case "kcal":
        useOrder({ value: 'yen', display: '円' })
        break;
    }
  }

  const handleButton = () => {
    // if input is not number break
    const newResult = doGacha(input, order)
    useResult(newResult)
  }

  return (
    <main>
      <div className="page">
        <div className="heading">
          <h1>サイゼリヤ</h1>
          <div className="kossoriInput">
          <form>
            <input type="number"
              id="NumberInput"
              className="no-spin"
              pattern="[0-9]*"
              value={input}
              placeholder="1000"
              onChange={handleInputChange}
              />
            </form>
            <div className="OrderInput" onClick={handleOrder}>
              {order.display}
            </div>
            <h1>ガチャ</h1>
          </div>
        </div>

        <div className="buttonarea">
          <button onClick={() => { handleButton() }} className="btn">
            ガチャを回す
          </button>
        </div>
        <Result result={result}/>
      </div>
    </main>

  );
}
