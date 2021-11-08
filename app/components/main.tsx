import { useState } from 'react';
import { Items } from './items'
import { Menu } from '../domain/Menu';
import { MENUS } from '../hooks/menu.json';
import { Summary } from './summary';
import { Twitter } from './twitter';

export const Main: React.FC = () => {
  const [result, useResult] = useState([])
  const input = 1000;

  const doGacha = (budget: number): Menu[] => {
    const result: Menu[] = [];
    let left = budget

    while (left <= budget) {
      const candidates = MENUS.filter(menu => menu.price <= left)
      if (!candidates.length) break;
      const randNum = Math.floor(Math.random() * candidates.length);
      const food = candidates[randNum];
      left -= food.price
      result.push(food);
    }
    return result;
  }

  const handleButton = () => {
    const newResult = doGacha(input)
    useResult(newResult)
  }



  return (
    <main>
      <div className="page">
        <div className="heading">
          <h1>サイゼリヤ</h1>
          <h1>1000円ガチャ</h1>
        </div>
        <div className="buttonarea">
          <button onClick={() => { handleButton() }} className="btn">
            {"ガチャを回す"}
          </button>
        </div>
        <div className="result">
          <Items result={result} />
          <Summary result={result} />
          <Twitter result={result} />
        </div>

      </div>
    </main>

  );
}
