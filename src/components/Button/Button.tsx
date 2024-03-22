import { FC } from 'react';
import cn from 'classnames';

import style from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ text, icon, ...props }) => (
	<button {...props} className={cn(style['button'], {[style['button_card']]: icon && text})}>
		{icon && icon}
		{text && <span>{text}</span>}
	</button>
)
