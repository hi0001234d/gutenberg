import { forwardRef } from '@wordpress/element';
import clsx from 'clsx';
import { Text } from '../text';
import styles from './style.module.css';
import type { TitleProps } from './types';

const DEFAULT_TAG = <div />;

/**
 * The title for a card. Renders as a `<div>` by default — use the `render`
 * prop to swap in a semantic heading element when appropriate.
 */
export const Title = forwardRef< HTMLDivElement, TitleProps >(
	function CardTitle(
		{ className, render = DEFAULT_TAG, children, ...props },
		ref
	) {
		return (
			<Text
				ref={ ref }
				variant="heading-lg"
				render={ render }
				className={ clsx( styles.title, className ) }
				{ ...props }
			>
				{ children }
			</Text>
		);
	}
);
