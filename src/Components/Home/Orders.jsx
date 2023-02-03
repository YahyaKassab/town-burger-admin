import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import { Fragment, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Orders = () => {
  const navigate = useNavigate()
  var today = new Date()

  const [menu, setMenu] = useState([
    {
      image: "SliderImages\\burger1.jpg",
      title: "title1",
      description: "Description",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title2",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title3",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title4",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title5",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger1.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger2.jpg",
      title: "title",
      description: "descrition",
    },
    {
      image: "SliderImages\\burger3.jpg",
      title: "title",
      description: "descrition",
    },
  ])
  const cart = [
    menu.map((meal) => {
      return { meal, qty: 1, description: "description" }
    }),
  ]
  console.log(cart)
  const orders = [
    {
      cart: cart,

      datePlaced: {
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        time: {
          hour:
            today.getHours() < 13
              ? today.getHours() == 0
                ? 12
                : today.getHours()
              : today.getHours() - 12,
          minute:
            today.getMinutes().toString().length == 1
              ? "0" + today.getMinutes()
              : today.getMinutes(),
          day: today.getHours() < 13,
        },
      },
      dateDelivered: null,
      state: 0,
      address: { street: "street", details: "details" },
    },
    {
      cart: cart,

      datePlaced: {
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        time: {
          hour:
            today.getHours() < 13
              ? today.getHours() == 0
                ? 12
                : today.getHours()
              : today.getHours() - 12,
          minute:
            today.getMinutes().toString().length == 1
              ? "0" + today.getMinutes()
              : today.getMinutes(),
          day: today.getHours() < 13,
        },
      },
      dateDelivered: null,
      state: 0,
      address: { street: "street", details: "details" },
    },
    {
      cart: cart,

      datePlaced: {
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        time: {
          hour:
            today.getHours() < 13
              ? today.getHours() == 0
                ? 12
                : today.getHours()
              : today.getHours() - 12,
          minute:
            today.getMinutes().toString().length == 1
              ? "0" + today.getMinutes()
              : today.getMinutes(),
          day: today.getHours() < 13,
        },
      },
      dateDelivered: null,
      state: 0,
      address: { street: "street", details: "details" },
    },
    {
      cart: cart,

      datePlaced: {
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        time: {
          hour:
            today.getHours() < 13
              ? today.getHours() == 0
                ? 12
                : today.getHours()
              : today.getHours() - 12,
          minute:
            today.getMinutes().toString().length == 1
              ? "0" + today.getMinutes()
              : today.getMinutes(),
          day: today.getHours() < 13,
        },
      },
      dateDelivered: null,
      state: 0,
      address: { street: "street", details: "details" },
    },
    {
      cart: cart,

      datePlaced: {
        date: {
          day: today.getDate(),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
        },
        time: {
          hour:
            today.getHours() < 13
              ? today.getHours() == 0
                ? 12
                : today.getHours()
              : today.getHours() - 12,
          minute:
            today.getMinutes().toString().length == 1
              ? "0" + today.getMinutes()
              : today.getMinutes(),
          day: today.getHours() < 13,
        },
      },
      dateDelivered: null,
      state: 0,
      address: { street: "street", details: "details" },
    },
  ]
  return (
    <Grid container direction={"column-reverse"} spacing={4}>
      <Grid item xs={12}>
        <List sx={{ width: "100%", marginTop: 10, marginLeft: 3 }}>
          {orders.length == 0 ? (
            <h1 className="text-center">No Orders Yet</h1>
          ) : (
            <Grid container>
              <Grid item xs={4}></Grid>
            </Grid>
          )}
        </List>
      </Grid>
    </Grid>
  )
}
export default Orders
