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
import { Link } from "react-router-dom"
import { LabelList } from "recharts"
import Page from "../../Page"
export default function Managers() {
  const Managers = [
    {
      name: "yaya",
      title: "cook",
      manager: false,
      salary: 5000,
      contractFrom: "12/1",
      contractTo: "31/12",
      workDays: [
        {
          day: "sunday",
          shiftFrom: "5am",
          shiftTo: "3pm",
        },
      ],
    },
    {
      name: "yaya",
      title: "cook",
      manager: false,
      salary: 5000,
      contractFrom: "12/1",
      contractTo: "31/12",
      workDays: [
        {
          day: "sunday",
          shiftFrom: "5am",
          shiftTo: "3pm",
        },
      ],
    },
    {
      name: "yaya",
      title: "cook",
      manager: false,
      salary: 5000,
      contractFrom: "12/1",
      contractTo: "31/12",
      workDays: [
        {
          day: "sunday",
          shiftFrom: "5am",
          shiftTo: "3pm",
        },
      ],
    },
  ]
  return (
    <Page nav={true}>
      <List sx={{ width: "80%", marginTop: 10, marginLeft: 3 }}>
        <Typography
          variant="h3"
          className="ml-12 mb-20 font-sans font-bold inline-block"
        >
          Managers
        </Typography>

        {Managers.map((manager, index) => {
          return (
            <Fragment key={index}>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" className="ml-12 my-10">
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6} xl={4}>
                    <Typography variant="h4">Name:{manager.name}</Typography>{" "}
                    <Typography variant="h6">
                      Job title : {manager.title}
                    </Typography>{" "}
                    <Typography variant="h6">
                      Salary : {manager.salary} EGP
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={12} lg={6} xl={4}>
                    <Button
                      variant="contained"
                      className="mx-2 py-3 px-5 font-bold"
                    >
                      edit
                    </Button>
                    <Button
                      variant="contained"
                      className="mx-2 py-3 px-5 font-bold bg-red-900  "
                    >
                      delete
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
