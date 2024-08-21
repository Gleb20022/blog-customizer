import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import { OnClick } from '../arrow-button/ArrowButton';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	isOpen: boolean;
	onClick: OnClick;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { isOpen, onClick } = props;
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
