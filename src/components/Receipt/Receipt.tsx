import { FC } from 'react';

import { ReceiptProps } from './Receipt.types';

import styles from './Receipt.module.scss';


export const Receipt: FC<ReceiptProps> = ({ title, message, totalPrice }) => (
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
