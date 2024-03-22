import { FC } from 'react'
import styles from './Receipt.module.scss'
import { ReceiptProps } from './Receipt.types'


export const Receipt: FC<ReceiptProps> = ({ title, message, totalPrice }) => {

  return (
    <div className={styles['receipt']}>
			<div className={styles['receipt__title']}>{title}</div>
			<div className={styles['receipt__price']}>
				<span>{totalPrice.rubles}</span>
				<span className={styles['receipt__price-cents']}>{`,${totalPrice.kopecks}`}</span>
				<span>₽</span>
			</div>
			<div className={styles['receipt__message']}>{message}</div>
	</div>
  )
}
