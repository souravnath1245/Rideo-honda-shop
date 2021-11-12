import useAuth from './../../../hooks/useAuth';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BookingProducts = (props) => {
    const {date} =props
    const {user} = useAuth()
    const [clients , setClients] = useState([])

    useEffect(() => {
        const url =`http://localhost:5000/bookingClient?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClients(data))
        
    }, [date])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${ tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

    return (
        <div>
            <h1 className="text-center">Booking client : {clients.length} </h1>
            
            <TableContainer component={Paper}>
      <Table 
    //   sx={{ minWidth: 300 }}
       aria-label="Clients table"
       >
        <TableHead>
          <TableRow>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <StyledTableRow key={client._id}>
              <StyledTableCell component="th" scope="row">
                {client.clientName}
              </StyledTableCell>
              <StyledTableCell align="right">{client.date}</StyledTableCell>
              <StyledTableCell align="right">{client.productName}</StyledTableCell>
              <StyledTableCell align="right">{client.price}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained">Delete</Button>
                  </StyledTableCell>
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* {
                clients.map(client => <div>
                    <p>{client.clientName}</p>
                    <p>{client.date}</p>
                    <p>{date.toLocaleDateString()}</p>
                </div>)
            } */}
            
        </div>
    );
};

export default BookingProducts;