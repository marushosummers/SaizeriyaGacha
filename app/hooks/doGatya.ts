
import { Menu } from '../domain/Menu';
import { MENUS } from '../hooks/menu.json';

export const doGacha = (budget: number): Menu[] => {
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
