import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import style from '../styles/Population_table.module.css'
import Link from 'next/link';
// import Image from 'next/image'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);




const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

const sortpopulation = (api_data, direction) => {
    if (direction === "asc") {
        return [...api_data].sort((a, b) => a.population > b.population ? 1 : -1);
    }
    if (direction === "desc") {
        return [...api_data].sort((a, b) => a.population > b.population ? -1 : 1);
    }
    return api_data;
}

const Population_table = ({ api_data }) => {
    const [direction, setdirection] = React.useState("");
    const sorted_data = sortpopulation(api_data, direction);
    // console.log(sorted_data);

    const classes = useStyles();
    return (
        <div className={style.table_div}>
            <div className={style.btn}>
                <Button variant="contained" onClick={() => setdirection("asc")}>Less Population</Button>
                <Button variant="contained" onClick={() => setdirection("desc")}>High Population</Button>
            </div>
            <TableContainer component={Paper} className={style.main_table}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={style.heading}>
                        <TableRow className={style.table_row}>
                            <StyledTableCell >Country Name</StyledTableCell>
                            <StyledTableCell align="center">Total Population</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sorted_data.map((row) => (
                            <Link href={`/country/${row.alpha3Code}`}>

                                <StyledTableRow className={style.tables}>
                                    
                                    <StyledTableCell component="th" scope="row" key={row.name}>{row.name}</StyledTableCell>
                                    <StyledTableCell align="center" key={row.population}>{row.population}</StyledTableCell>

                                </StyledTableRow>
                            </Link>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    )
}

export default Population_table
