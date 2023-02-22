import { Grid, Rating, Typography } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import DispatchContext from '../../DispatchContext'
import LoadingIcon from '../../LoadingIcon'
import StateContext from '../../StateContext'
export default function LatestReviews() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const [isFetching, setIsFetching] = useState(true)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: 'zag',
      description: 'desc',
      customerEmail: 'email',
      customerId: 1,
      customerName: 'yaya',
      rating: 3,
      time: 'now',
    },
  ])

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
        .finally((res) => {
          console.log('finally reveiws fetching ')
          setIsFetching(false)
        })
    }
    fetchLatestReviews()
  }, [])

  if (isFetching) return <LoadingIcon />

  return (
    <div className="relative">
      <Typography variant="h4" position="absolute">
        Latest Reviews
      </Typography>
      <Grid container className="mt-10">
        {appState.latestReviews.map((review, index) => {
          const time = new Date(review.time)
          return (
            <Grid item xs={4} key={index}>
              <Typography variant="h6" className="my-3">
                {review.title}
              </Typography>
              <Typography variant="body1" className="my-3">
                {review.description}
              </Typography>
              <Typography variant="body2" className="my-3">
                on {time.getDate()}/{time.getMonth()}/{time.getFullYear()}
                <br />
                at{' '}
                {time.getHours() < 13
                  ? time.getHours() + ':' + time.getMinutes() + ' AM'
                  : time.getHours() - 12 + ':' + time.getMinutes() + ' PM'}
              </Typography>
              <Typography variant="body2" className="my-3">
                by: {review.customerName}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={review.rating}
                precision={0.5}
                readOnly
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
