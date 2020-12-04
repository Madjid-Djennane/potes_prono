import React, { useEffect } from 'react'
import '../../App.css'
import { Flex_col, Flex_row } from '../../styles/flex-style'
import { Sun, Moon } from 'tabler-icons-react'
import { darkModeAction } from '../../actions/config_action'
import { useSelector, useDispatch } from 'react-redux'
import i18n from '../../config/translations'


const Header = () => {

	const dispatch = useDispatch()
	const config = useSelector(state => state.config)


	useEffect(() => {
		if (!config.darkMode) {
			dispatch(darkModeAction(window.localStorage.getItem('theme')))
		}
	}, [config.darkMode, dispatch])

	const themeChange = (value) => {
		window.localStorage.setItem('theme', value)
		dispatch(darkModeAction(value))
		console.log(value)
	}
	return (
		<header>
			<Flex_col height='75px'>
				<Flex_row>
					<nav style={{ width: '100%', padding: '2rem 0 ', textAlign: 'center' }}>
						<button onClick={() => themeChange('dark')}>
							<Moon size={48} strokeWidth={2} color={'black'} />
						</button>
						<button onClick={() => themeChange('light')}>
							<Sun size={48} strokeWidth={2} color={'black'} />
						</button>
						<button onClick = {() => i18n.changeLanguage('fr')}>fr</button>
						<button onClick = {() => i18n.changeLanguage('en')}>en</button>
						</nav>
				</Flex_row>
			</Flex_col>
		</header>
	)
}

export default Header
