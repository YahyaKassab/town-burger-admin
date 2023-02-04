import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Typography from "@mui/material/Typography"
import Page from "../Page"
import { Button, Divider, Grid } from "@mui/material"
import MealItem from "./MealItem"
export default function Menu() {
  const [menu, setMenu] = useState([
    {
      image: "SliderImages\\burger1.jpg",
      title: "title1",
      description: "Description",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title2",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title3",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title4",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title5",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
      price: 30,
    },
  ])
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Page nav={true}>
      <Typography variant="h3" className="my-3 inline-block">
        Menu
      </Typography>
      <Button variant="contained" className="inline-block mb-5 ml-5">
        Add Meal
      </Button>
      <Divider />
      <Grid container spacing={4} className="my-3">
        {menu.map((item, index) => (
          <Grid item key={index} xl={3} lg={4} md={6} xs={12}>
            <MealItem meal={item} />
          </Grid>
        ))}
      </Grid>
    </Page>
  )
}
