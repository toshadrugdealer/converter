import { Main } from '../../pages/MainPage'
import { useTheme } from '../context/ThemeContext'
import styles from './styles.module.css'

export const BaseLayout = () => {
	const { isDark } = useTheme()
	if (isDark) {
		document.body.style.backgroundImage =
			"url('https://img.freepik.com/free-photo/black-wall-paint-textured-background_53876-133013.jpg?t=st=1726413131~exp=1726416731~hmac=ee4433d044c7ea4543e02437af96064848e39f08f51c8bd6b5fc1a83553072be&w=1800')"
	} else {
		document.body.style.backgroundImage =
			"url('https://img.freepik.com/free-photo/white-brush-stroke-texture-background_53876-132779.jpg?t=st=1726413266~exp=1726416866~hmac=5a29568d812e6c7c056351aec8df154847f02265f0de8ebf71638e2c6f152b28&w=1800')"
	}

	return (
		<div className={styles.wrapper}>
			<Main />
		</div>
	)
}
