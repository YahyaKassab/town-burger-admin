import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
} from "@mui/material"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router"
import IconButton from "@mui/material/IconButton"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import DispatchContext from "../../DispatchContext"
export default function MostFamousItem(props) {
  const navigate = useNavigate()
  const meal = props.meal
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
        <CardMedia>
          <img src={meal.image} width={"100%"} alt="" />
        </CardMedia>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            className="my-auto text-gray-800"
          >
            {meal.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meal.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meal.price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" className="mx-auto mb-1">
            Edit
          </Button>
          <Button variant="contained" className="mx-auto mb-1 bg-red-900">
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
