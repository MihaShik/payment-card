import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: ReactNode;

	disabled?: boolean;
	onClick?: (e: unknown) => void;
}