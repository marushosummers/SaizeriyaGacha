import { Menu } from '../domain/Menu';

type Summary = [price: number, calorie: number, salt: number];
export const getSummary = (result: Menu[]): Summary => {
  const totalPrice = result.reduce((sum, item) => sum + item.price, 0);
  const totalCalorie = result.reduce((sum, item) => sum + item.calorie, 0);
  const totalSalt = result.reduce((sum, item) => sum + item.salt, 0);
  return [totalPrice, totalCalorie, Math.round(totalSalt * 10) / 10];
};
