import React, { useEffect } from 'react'
import {
  Flex_col_center,
  Flex_row,
  Flex_row_space_between,
  Flex_row_space_around
} from '../../styles/flex-style'
import { Sun, Moon } from 'tabler-icons-react'
import { darkModeAction } from '../../actions/config_action'
import { useSelector, useDispatch } from 'react-redux'
import i18n from '../../config/translations'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const dispatch = useDispatch()
  const config = useSelector(state => state.config)
  const { t } = useTranslation()

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  const themeChange = value => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }
  return (
    <Head>
      <Flex_col_center height='48px'>
        <Flex_row>
          <Flex_row_space_between width='100vw'>
            <Flex_row_space_around width='120px'>
              <Button onClick={() => themeChange('dark')}>
                <Moon size={28} strokeWidth={2} color={'black'} />
              </Button>
              <Button onClick={() => themeChange('light')}>
                <Sun size={28} strokeWidth={2} color={'black'} />
              </Button>
            </Flex_row_space_around>

            <Flex_row_space_around width='200px'>
              <Flex_col_center>
                <Link href='/home'>{t('home')} </Link>
              </Flex_col_center>
              <Flex_col_center>
                <Link href='/history'>{t('history')}</Link>
              </Flex_col_center>
            </Flex_row_space_around>

            <Flex_row_space_around width='100px'>
              <Button onClick={() => i18n.changeLanguage('fr')}>fr</Button>
              <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
            </Flex_row_space_around>
          </Flex_row_space_between>
        </Flex_row>
      </Flex_col_center>
    </Head>
  )
}

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
  min-width: 35px;
`

const Head = styled.header`
  box-shadow: 0 4px 2px -2px gray;
  background-color: white;
`

const Link = styled.a`
  text-decoration: none;
  color: #999;
  &:active {
    box-shadow: 0 4px 2px -2px gray;
    color: red;
  }
  &:visited {
    box-shadow: 0 4px 2px -2px gray;
    color: red;
  }
`

export default Header
