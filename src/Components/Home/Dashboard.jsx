import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import CurrentEmployee from './CurrentEmployee'
import LatestReviews from './LatestReviews'
import MostFamous from './MostFamous'
import Page from '../Page'
import Deposits from './Deposits'
import Chart from './Charts'
import StateContext from '../../StateContext'
import DispatchContext from '../../DispatchContext'
import axios from 'axios'
import MessageContext from '../../MessageContext'
import LoadingIcon from '../../LoadingIcon'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function DashboardContent() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const message = useContext(MessageContext)

  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  useEffect(() => {
    //fetch latest reviews
    const fetchLatestReviews = async () => {
      await axios
        .get('/admin/getLatestReviews')
        .then((res) => {
          console.log('latest fetched')
          console.log(res.data.result)
          appDispatch({ type: 'fetchLatestReviews', value: res.data.result })
        })
        .catch((res) => {
          console.log('failed')
          console.log(res)
        })
    }
    fetchLatestReviews()

    //fetch most ordered
    const fetchMostOrdered = async () => {
      await axios
        .get('/orders/getMostOrdered')
        .then((res) => {
          console.log('most ordered fetched success')
          console.log(res.data)
          appDispatch({ type: 'fetchMostOrdered', value: res.data.result })
        })
        .catch((res) => {
          console.log('failed')
          console.log(res)
        })
    }

    fetchMostOrdered()

    //fetch monthly depostits

    const fetchMonthlyDeposits = async () => {
      const response = await axios
        .get('/admin/getDepositsMonth')
        .then((res) => {
          console.log('fetched deposits month')
          appDispatch({ type: 'fetchMonthlyDeposits', value: res.data })
          console.log(res.data)
        })
        .catch((res) => {
          console.log('failed')
          message.error(res.response.data.message)
        })
    }
    fetchMonthlyDeposits()

    //fetch balance
    const fetchBalance = async () => {
      await axios
        .get('/admin/getBalance')
        .then((res) => {
          console.log('balance')
          console.log(res.data.result.myBalance)
          appDispatch({
            type: 'fetchBalance',
            value: res.data.result.myBalance,
          })
        })
        .catch((res) => {
          console.log('failed')
          message.error(res.response.data.message)
        })
    }
    fetchBalance()
  }, [])

  return (
    <Page nav={true}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            {appState.monthlyDepositsFetching ? <LoadingIcon /> : <Chart />}
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            {appState.monthlyDepositsFetching ? <LoadingIcon /> : <Deposits />}
          </Paper>
        </Grid>
        {/* Current employee */}
        <Grid item xs={12} md={6} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            {/* <CurrentEmployee />{' '} */}
          </Paper>
        </Grid>
        {/* Reviews */}
        <Grid item xs={12} md={6} lg={7}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 350,
            }}
          >
            {appState.latestReviewsFetching ? (
              <LoadingIcon />
            ) : (
              <LatestReviews />
            )}
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            {appState.mostOrderedFetching ? <LoadingIcon /> : <MostFamous />}
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Page>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
