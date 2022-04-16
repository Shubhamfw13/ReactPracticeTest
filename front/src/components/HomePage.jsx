import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Get_Data } from "../cityCountry/action";
import Styles from "./Homepage.module.css";

import { grey, red } from "@mui/material/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const HomePage = () => {
  const { city } = useSelector((state) => state.cityCountry);
  console.log(city, "homepage");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(Get_Data());
  }, []);

  return (
    <>
      <h1>Country-City Data</h1>
      <Link to="/addcountry">
        {" "}
        <Button className="button" variant="outlined" color="secondary">
          Add Country
        </Button>
        <br />
        <br />
      </Link>
      <Link to="/addcity">
        <Button className="button" variant="outlined" color="secondary">
          Add City
        </Button>
      </Link>

      <br />
      <br />
      <br />
      <TableContainer className={Styles.table} component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Population</StyledTableCell>
              <StyledTableCell align="center">Remove City</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {city &&
              city.map((city) => (
                <StyledTableRow key={city.id}>
                  <StyledTableCell component="th" scope="row">
                    {" "}
                    {city.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {city.country_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {city.city_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {city.population}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <Button variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  </StyledTableCell>
                 
                  <StyledTableCell align="center">
                    <Button variant="contained" startIcon={<ModeEditOutlineSharpIcon />}>
                    Edit
                  </Button>
                  </StyledTableCell>
                  
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
