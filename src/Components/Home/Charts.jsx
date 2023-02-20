import * as React from 'react'
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

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const getDate = () => {
  const date = new Date()
  return `${date.getDate()}/${date.getMonth() + 1}`
}

const subFromDate = (days) => {
  const date = new Date()
  if (date.getDate() > days) {
    return `${date.getDate() - days}/${date.getMonth() + 1}`
  } else {
    const toSub = days - date.getDate()
    //shift to the last month
    if (date.getMonth() == 0) {
      return `${30 - toSub}/${12}`
    } else {
      //no shifting
      return `${30 - toSub}/${date.getMonth()} `
    }
  }
}

const data = [
  createData(getDate(), 0),
  createData(subFromDate(6), 300),
  createData(subFromDate(12), 600),
  createData(subFromDate(18), 800),
  createData(subFromDate(24), 1500),
  createData(subFromDate(29), 2000),
]

export default function Chart() {
  const theme = useTheme()

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
