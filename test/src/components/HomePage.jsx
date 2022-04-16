import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
export const HomePage = () => {

    return <>
        <h1>Country-City Data</h1>
        <Link to="/addcountry"> <Button className="button" variant="contained" color="success">
            Add Country
        </Button></Link>
        <Link to="/addcity">
            <Button className="button" variant="contained" color="success">
                Add CIty
            </Button>
        </Link>





    </>
}