import * as React from "react"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListSubheader from "@mui/material/ListSubheader"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PeopleIcon from "@mui/icons-material/People"
import BarChartIcon from "@mui/icons-material/BarChart"
import LayersIcon from "@mui/icons-material/Layers"
import AssignmentIcon from "@mui/icons-material/Assignment"
import { useNavigate } from "react-router"
export const MainListItems = () => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/orders")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/customers")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/employees")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/managers")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Managers" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/reviews")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
    </React.Fragment>
  )
}
export const SecondaryListItems = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/menu")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Menu" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/policies")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Policies" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/about-us")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
    </React.Fragment>
  )
}
