import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import { Typography } from '@mui/material'
import LoadingIcon from '../../LoadingIcon'
import axios from 'axios'
import StateContext from '../../StateContext'
import DispatchContext from '../../DispatchContext'
import MessageContext from '../../MessageContext'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

export default function Chart() {
  const [data, setData] = useState([])
  const theme = useTheme()
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const message = useContext(MessageContext)

  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    //fetch monthly depostits
    const fetchMonthlyDeposits = async () => {
      const response = await axios
        .get('/Admin/GetDepositsMonthChart')
        .then((res) => {
          console.log('fetched deposits month')
          console.log(res.data)
          setData([
            createData(
              `${new Date(res.data.first.time).getDate()}/${
                new Date(res.data.first.time).getMonth() + 1
              }`,
              res.data.first.amount
            ),
            createData(
              `${new Date(res.data.second.time).getDate()}/${
                new Date(res.data.second.time).getMonth() + 1
              }`,
              res.data.second.amount
            ),
            createData(
              `${new Date(res.data.third.time).getDate()}/${
                new Date(res.data.third.time).getMonth() + 1
              }`,
              res.data.third.amount
            ),
            createData(
              `${new Date(res.data.fourth.time).getDate()}/${
                new Date(res.data.fourth.time).getMonth() + 1
              }`,
              res.data.fourth.amount
            ),
            createData(
              `${new Date(res.data.fifth.time).getDate()}/${
                new Date(res.data.fifth.time).getMonth() + 1
              }`,
              res.data.fifth.amount
            ),
          ])
          setIsFetching(false)
          console.log(res.data)
        })
        .catch((res) => {
          setIsFetching(false)
          console.log('failed to fetch deposits month')
          console.log(res)
        })
    }
    fetchMonthlyDeposits()
  }, [])
  if (isFetching) return <LoadingIcon />
  return (
    <React.Fragment>
      <Typography variant="h3">Today</Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
