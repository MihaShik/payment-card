import { FC } from 'react';

import { GreenArrow } from '../../assets/icons';
import { ContentProps } from './Content.types';

import styles from './Content.module.scss';

export const Content: FC<ContentProps> = ({ children, registerID }) => {
  const date = new Date();
  const localeDate = date.toLocaleDateString()
  const time = date.toLocaleTimeString().slice(0, 5);

  return (
    <div className={styles['content']}>
      <div className={styles['content__header']}>
        <div className={styles['date']}>
          <span>{localeDate}</span>
          <span>{time}</span>
          <span>{`Касса #${registerID}`}</span>
        </div>
      </div>

      <div className={styles['content__body']}>
          {children}
      </div>

      <img className={styles['green-arrow']} src={GreenArrow} alt="Cтрелка" />
    </div>
  )
}
