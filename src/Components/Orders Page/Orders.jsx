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
import Page from "../Page"

const Orders = () => {
  const navigate = useNavigate()
  var today = new Date()

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
  return (
    <Page nav={true}>
      <Grid container direction={"column-reverse"} spacing={4}>
        <Grid container>
          <Grid item xs={10}>
            <List sx={{ width: "100%", marginTop: 10, marginLeft: 3 }}>
              {orders.length == 0 ? (
                <h1 className="text-center">No Orders Yet</h1>
              ) : (
                orders.map((order, index) => {
                  const [state, setState] = useState(0)
                  const handleAdd = () => {
                    if (state < 2) setState((prev) => prev + 1)
                  }
                  const handleSub = () => {
                    if (state > 0) setState((prev) => prev - 1)
                  }
                  return (
                    <Fragment key={index}>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start" className="ml-12 my-10">
                        <Grid container spacing={4}>
                          <Grid item xs={4}>
                            <Typography variant="h3" className="mb-3">
                              Ordered on {order.datePlaced.date.day}/
                              {order.datePlaced.date.month}/
                              {order.datePlaced.date.year}
                              <span className="text-lg">
                                {" "}
                                {} <br /> at {order.datePlaced.time.hour}:
                                {order.datePlaced.time.minute}
                                {" " + order.datePlaced.time.day
                                  ? " AM"
                                  : " PM"}{" "}
                                <br />
                                to Yahya kassab <br /> in {
                                  order.address.street
                                }{" "}
                                street exactly {order.address.details} <br />{" "}
                                {/* index {appState.orders.length}, {order.index} */}
                              </span>
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={6}
                            lg={6}
                            className="text-center"
                          >
                            <Grid container>
                              <Grid item xs={4}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography variant="h5">Meal</Typography>
                                    {order.cart.map((meal, index) => (
                                      <Typography
                                        key={index}
                                        variant="h5"
                                        className="my-3"
                                      >
                                        {meal.meal.title}
                                      </Typography>
                                    ))}
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={2}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography variant="h5">
                                      Quantity
                                    </Typography>
                                    {order.cart.map((meal, index) => (
                                      <Typography
                                        key={index}
                                        variant="h5"
                                        className="my-3"
                                      >
                                        {meal.qty}
                                      </Typography>
                                    ))}
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={6}>
                                <Grid container>
                                  <Grid item xs={12}>
                                    <Typography variant="h5">
                                      Description
                                    </Typography>
                                    {order.cart.map((meal, index) => (
                                      <Typography
                                        key={index}
                                        variant="h5"
                                        className="my-3"
                                      >
                                        {meal.description}
                                      </Typography>
                                    ))}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item lg={2} xs={8}>
                            <Typography variant="h5" className="text-center">
                              {order.state == 3 ? (
                                `Delivered on ${
                                  order.dateDelivered.hour +
                                  ":" +
                                  order.dateDelivered.minute +
                                  (order.dateDelivered.day ? " AM" : " PM")
                                } `
                              ) : (
                                <>
                                  <Typography
                                    variant={state == 2 ? "h4" : "h6"}
                                    className={`my-3`}
                                    onClick={() => {}}
                                  >
                                    {state == 0 && "Prepairing.."}
                                    {state == 1 && "Out For Delivery"}
                                    {state == 2 && "Delivered"}
                                  </Typography>
                                  <Button
                                    variant="contained"
                                    className={`py-6 px-14 font-bold ${
                                      state == 2 ? "hidden" : "block"
                                    }`}
                                    onClick={handleAdd}
                                  >
                                    {state == 0 && "Out For Delivery"}
                                    {state == 1 && "Delivered"}
                                  </Button>
                                  <Button
                                    variant="contained"
                                    className={`font-bold my-10 ${
                                      state == 0 ? "hidden" : "block"
                                    }`}
                                    onClick={handleSub}
                                  >
                                    Undo
                                  </Button>
                                </>
                              )}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Fragment>
                  )
                })
              )}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  )
}
export default Orders
