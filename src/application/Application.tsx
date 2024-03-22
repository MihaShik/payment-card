
import { Button } from '../components/Button'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer/index.ts'
import { Receipt } from '../components/Receipt'

import { Arrow, Men } from '../assets/icons'
import styles from './Application.module.scss'

const getRandomInt = (min = 1, max = 100) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const Application = () => {
  const totalPrice = {
    rubles: getRandomInt(100, 999),
    kopecks: getRandomInt(0, 99)
  };
  const registerID = getRandomInt(0, 99);

  return (
    <div className={styles['page']}>
      <Content registerID={registerID}>
        <Receipt 
          title={'Стоимость покупок'}
          totalPrice={totalPrice}
          message={`Приложите\nили прокатайте карту`} 
        />
      </Content>

      <Footer>
        <Button icon={<img src={Arrow} alt="Стрелка" />} />
        <Button icon={<img src={Men} alt="Человечик" />} text={'Вызов сотрудника'} />
      </Footer>
    </div>
  )
}
