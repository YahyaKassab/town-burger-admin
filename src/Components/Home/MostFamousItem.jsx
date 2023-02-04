import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardHeader,
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router"
export default function MostFamousItem(props) {
  const navigate = useNavigate()
  const meal = props.meal
  return (
    <>
      <Card sx={{ maxWidth: 400, borderRadius: 5 }}>
        <CardMedia>
          <img src={meal.image} width={"100%"} alt="" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" className=" font-bold">
            {meal.title}
          </Typography>
          <Typography variant="body1" className="">
            {meal.description}
          </Typography>
          <Typography variant="body1" className="">
            {meal.price} $
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
