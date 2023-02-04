import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material"
import React, { Fragment, useState } from "react"
import { useNavigate } from "react-router"
import { LabelList } from "recharts"
import Page from "../../Page"
export default function Customers() {
  const navigate = useNavigate()
  var today = new Date()
  //fname,lname,email,phone,orders,password
  //ban,edit,delete
  const [menu, setMenu] = useState([
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
  const cart = menu.map((meal, index) => {
    return { meal, qty: index + 1, description: "d" }
  })

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
  const customers = [
    {
      name: "yaya kassab",
      email: "nigga@gmail.com",
      phone: "01123334417",
      password: "nigga",
      orders,
    },
    {
      name: "yaya kassab",
      email: "nigga@gmail.com",
      phone: "01123334417",
      password: "nigga",
      orders,
    },
    {
      name: "yaya kassab",
      email: "nigga@gmail.com",
      phone: "01123334417",
      password: "nigga",
      orders,
    },
  ]
  return (
    <Page nav={true}>
      <List sx={{ width: "80%", marginTop: 10, marginLeft: 3 }}>
        {customers.map((customer, index) => {
          const [showPassword, setShowPassword] = useState(false)
          return (
            <Fragment key={index}>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" className="ml-12 my-10">
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={4}>
                    <Grid item xs={12}>
                      <Typography variant="h6">{customer.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">{customer.email}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">{customer.phone}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <label htmlFor="password">Password</label>
                    <Button
                      className="ml-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      disabled
                      name="password"
                      value={customer.password}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12} lg={4} className="mt-12 text-center">
                    <Button variant="contained" className="mx-2">
                      edit
                    </Button>
                    <Button variant="contained" className="mx-2 bg-red-800">
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            </Fragment>
          )
        })}
      </List>
    </Page>
  )
}
