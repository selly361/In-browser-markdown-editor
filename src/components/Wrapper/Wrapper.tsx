import React, { Fragment } from 'react'
import { darkTheme, lightTheme } from 'global/theme'

import { GlobalStyle } from 'global/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { useAppSelector } from 'app/hooks'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppSelector((state) => state.helper.theme)
  return (
    <Fragment>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    </Fragment>
  )
}

export default Wrapper