//Main imports
import React from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

//MaterialUI imports
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
const StyledTableCell = withStyles((theme) => ({head:{backgroundColor: theme.palette.common.black, color: theme.palette.common.white}, body:{fontSize: 18,}}))(TableCell);


function FavoriteItem(item) { // main function for this page
   const dispatch = useDispatch();
   const fightSummary = (item) => {
     console.log(item)
   };
   const deleteFavorite = (item) => {
      console.log(item.report_code);
      dispatch({
         type: "DELETE_FAVORITE",
         payload: item.report_code
      });
   }

   return (
      <TableRow onClick={() => fightSummary(item)}>
        <StyledTableCell style={{color: 'black'}} align="left">{item.date}</StyledTableCell>
        <StyledTableCell style={{color: 'black'}} align="left">{item.report_name}</StyledTableCell>
        <StyledTableCell style={{color: 'black'}} align="left"><Button variant="contained" color="secondary" onClick={() => deleteFavorite(item)}>Delete</Button></StyledTableCell>
      </TableRow>
   );
}; // end of main function for this page


export default FavoriteItem;