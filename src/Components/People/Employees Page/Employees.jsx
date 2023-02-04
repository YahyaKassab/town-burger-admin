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
export default function Employees() {
  const employees = [
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
        {employees.map((employee, index) => {
          return (
            <Fragment key={index}>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" className="ml-12 my-10">
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={6} xl={4}>
                    <Typography variant="h4">Name:{employee.name}</Typography>{" "}
                    <Typography variant="h6">
                      Job title : {employee.title}
                    </Typography>{" "}
                    <Typography variant="h6">
                      Salary : {employee.salary} EGP
                    </Typography>{" "}
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
