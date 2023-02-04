import { Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Page from "../../Page"
export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState(
    "aboutus aboutus aboutus aboutus aboutus aboutus  "
  )
  const [edit, setEdit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(aboutUs)
  }
  return (
    <Page nav={true}>
      <Typography variant="h3" className="my-5">
        About Us
      </Typography>
      <TextField
        value={aboutUs}
        disabled={!edit}
        onChange={(e) => setAboutUs(e.target.value)}
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
