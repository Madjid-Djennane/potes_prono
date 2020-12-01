
import React, { useEffect } from 'react';
import '../../App.css';



import { Sun , Moon} from 'tabler-icons-react';
import { darkModeAction } from '../../actions/config_action';

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
	const dispatch = useDispatch();
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }
    return (
<header >
<nav style={{ width: '100%', padding: '2rem 0 ', backgroundColor: 'White', textAlign: 'center' }}>

<button onClick={() => themeChange('dark')}>
<Moon
size={48}
strokeWidth={2}
color={'black'}
/>
</button>
<button onClick={() => themeChange('light')}><Sun
size={48}
strokeWidth={2}
color={'black'}
/></button>
</nav>
</header>
    )
}

export default Header
