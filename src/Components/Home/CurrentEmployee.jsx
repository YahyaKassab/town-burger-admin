import { CssBaseline, Grid, Typography } from "@mui/material"
import React from "react"
export default function CurrentEmployee() {
  const employee = { name: "Mr.Ahmed", shift: { start: 12, end: 5 } }
  return (
    <>
      <CssBaseline />
      <Typography variant="h4" className="mt-3" color={"primary"}>
        Current counter employee
      </Typography>
      <Typography variant="h4" className="mt-3">
        Name: {employee.name}
      </Typography>
      <Typography variant="h6" className="mt-3">
        Shift ends in: {employee.shift.end} pm
      </Typography>
    </>
  )
}
