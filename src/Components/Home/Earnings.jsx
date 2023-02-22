import React, { useEffect, useState } from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import LoadingIcon from '../../LoadingIcon'
import axios from 'axios'

function preventDefault(event) {
  event.preventDefault()
}

export default function Earnings() {
  const [isFetching, setIsFetching] = useState(true)
  const [earnings, setEarnings] = useState(0)

  useEffect(() => {
    //fetch our earnings
    const fetchEarnings = async () => {
      const response = await axios
        .get('/Admin/GetEarningsMonth')
        .then((res) => {
          console.log('earnings fetched')
          console.log(res.data)
          setEarnings(res.data)
        })
        .catch((res) => {
          console.log('earnings failed')
          console.log(res)
        })
      setIsFetching(false)
    }
    fetchEarnings()
  }, [])

  if (isFetching) return <LoadingIcon />
  return (
    <React.Fragment>
      <Typography variant="h3">Recent Earnings</Typography>

      <Typography component="p" variant="h4">
        ${earnings}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  )
}
