import cn from 'classnames';
import { FC } from 'react';

import { ButtonProps } from './Button.types';

import style from './Button.module.scss';


export const Button: FC<ButtonProps> = ({ text, icon, ...props }) => (
	<button {...props} className={cn(style['button'], {[style['button_card']]: icon && text})}>
		{icon && icon}
		{text && <span>{text}</span>}
	</button>
)
