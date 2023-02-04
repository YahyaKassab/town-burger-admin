import { Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Page from "../../Page"
export default function Policies() {
  const [policies, setPolicies] = useState(
    "policies policies policies policies policies policies policies policies policies policies "
  )
  const [edit, setEdit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(policies)
  }
  return (
    <Page nav={true}>
      <Typography variant="h3" className="my-5">
        Policies
      </Typography>
      <TextField
        value={policies}
        disabled={!edit}
        onChange={(e) => setPolicies(e.target.value)}
        fullWidth
        multiline
        rows={5}
      />
      <Button
        variant="contained"
        onClick={(e) => {
          setEdit(!edit)
          edit ? handleSubmit(e) : ""
        }}
        className="my-5 py-3 px-5"
      >
        {edit ? "Confirm" : "Edit"}
      </Button>
    </Page>
  )
}
