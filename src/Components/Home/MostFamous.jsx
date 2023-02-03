import { Button, Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import MostFamousItem from "./MostFamousItem"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router"
export default function MostFamous() {
  const navigate = useNavigate()
  const [mostFamous, setMostFamous] = useState([
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
  ])
  const seeFullMenu = () => {
    navigate("/menu")
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Grid container spacing={9} className="mb-5">
        <Grid item xs={12}>
          <Typography variant="h4" className="my-12">
            Most Ordered in the last 24 hours
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} className="mb-20">
        <Grid item className="block" md={4} sm={6} xs={12}>
          <MostFamousItem meal={mostFamous[0]} />
        </Grid>
        <Grid item className="hidden md:block" md={4} sm={6} xs={12}>
          <MostFamousItem meal={mostFamous[1]} />
        </Grid>
        <Grid item className="hidden sm:block" md={4} sm={6} xs={12}>
          <MostFamousItem meal={mostFamous[2]} />
        </Grid>
      </Grid>
    </>
  )
}
