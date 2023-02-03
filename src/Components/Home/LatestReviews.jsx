import { Grid, Rating, Typography } from "@mui/material"
import React, { Fragment } from "react"
export default function LatestReviews() {
  const reviews = [
    {
      title: "good",
      details: "very Good food",
      date: "15/12/2022",
      user: { firstName: "nigga", lastName: "giga" },
      rating: 2.5,
    },
    {
      title: "good",
      details: "very Good food",
      date: "15/12/2022",
      user: { firstName: "nigga", lastName: "giga" },
      rating: 4.5,
    },
    {
      title: "good",
      details: "very Good food",
      date: "15/12/2022",
      user: { firstName: "nigga", lastName: "giga" },
      rating: 2,
    },
  ]
  return (
    <div className="relative">
      <Typography variant="h4" position="absolute">
        Latest Reviews
      </Typography>
      <Grid container className="mt-10">
        {reviews.map((review, index) => (
          <Grid item xs={4} key={index}>
            <Typography variant="h6" className="my-3">
              {review.title}
            </Typography>
            <Typography variant="body1" className="my-3">
              {review.details}
            </Typography>
            <Typography variant="body2" className="my-3">
              on: {review.date}
            </Typography>
            <Typography variant="body2" className="my-3">
              by: {review.user.firstName}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={review.rating}
              precision={0.5}
              readOnly
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
