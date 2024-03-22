import { FC } from 'react';

import { FooterProps } from './Footer.types';

import style from './Footer.module.scss';


export const Footer: FC<FooterProps> = ({children, ...props }) => (
	<div className={style['footer']} {...props}>
		<div className={style['footer__content']}>
			{children}
		</div>
	</div>
)
 