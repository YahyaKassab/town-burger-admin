import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  Rating,
  TextField,
  Typography,
} from "@mui/material"
import React, { Fragment, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { LabelList } from "recharts"
import Page from "../../Page"
export default function Reviews() {
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
      rating: 2.5,
    },
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
      rating: 2.5,
    },
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
    <Page nav={true}>
      <div className="relative">
        <Typography variant="h4" className="ml-10 my-10">
          Reviews
        </Typography>
        <Divider />
        <Grid container className="mt-10 ml-10" spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
              <Card style={{ maxWidth: 400, borderRadius: 10 }}>
                <CardContent>
                  <Typography variant="h3" className="my-3">
                    {review.title}
                  </Typography>
                  <Typography variant="h6" className="my-3">
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Page>
  )
}
