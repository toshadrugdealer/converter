import { Main } from '../../pages/MainPage'
import { useTheme } from '../context/ThemeContext'
import styles from './styles.module.css'

export const BaseLayout = () => {
	const { isDark } = useTheme()
	if (isDark) {
		document.body.style.backgroundColor = 'rgb(45, 47, 42)'
	} else {
		document.body.style.backgroundColor = 'rgb(244, 244, 244)'
	}

	return (
		<div className={styles.wrapper}>
			<Main />
		</div>
	)
}
