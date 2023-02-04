import { createTheme, CssBaseline, ThemeProvider, Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { Container } from "postcss"
import { useState } from "react"
import Nav from "./Navbar/Nav"
const mdTheme2 = createTheme()

const Page = (props) => {
  return (
    <>
      {props.nav ? (
        <ThemeProvider theme={mdTheme2}>
          <Nav />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <div className="container ml-4 mt-5 mx-auto">
              <CssBaseline />
              {props.children}
            </div>
          </Box>
        </ThemeProvider>
      ) : (
        <>{props.children}</>
      )}
    </>
  )
}
export default Page
