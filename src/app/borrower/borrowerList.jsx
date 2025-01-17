import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {useState,useEffect} from 'react'
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';


export default function borrowerList({searchQuery}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data,setData] = useState([]);
  const [allData,setAllData] = useState([]);

  const [loading,setLoading] = useState(true);


  const searchData = (searchQuery) => {
    let filterData = data;
    if(searchQuery && typeof searchQuery === "string"){
      filterData = data.filter(usr => usr.first_name?.toLowerCase().includes(searchQuery.toLowerCase()));
      setData(filterData);
    }
    else{
      setData(allData);
    }
  }

  useEffect(() => {
    searchData(searchQuery);
  }, [searchQuery])


  useEffect(() => {
    getData();
  }, [])


  

  const getData = () => {
    axios.get('/api/borrower')
    .then(response => {
      console.log('Data',response);
      setData(response.data);
      setAllData(response.data);
      setLoading(false);
    }).catch(err =>{
      console.log('Error',err);
    })
  }
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell
                  align="left"
                  style={{ minWidth: 70}}
                >
                    S.No.
                </TableCell>
            <TableCell
                  align="left"
                  style={{ minWidth: 70}}
                >
                    Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: 70}}
                >
                    Email
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: 70}}
                >
                    Phone Number
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: 70}}
                >
                    Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.person_id}>
                    <TableCell  align="left">
                      {index + 1}
                    </TableCell>
                    <TableCell  align="left">
                        {row.first_name} {row.last_name}
                    </TableCell>
                    <TableCell  align="left">
                      {row.email}
                    </TableCell>
                    <TableCell  align="left">
                      {row.phone_number}
                    </TableCell>
                    <TableCell  align="left">
                       <Dropdown>
                            <MenuButton
                                slots={{ root: IconButton }}
                                slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                            >
                                <MoreVert />
                            </MenuButton>
                            <Menu placement="bottom-end">
                                <MenuItem>
                                <ListItemDecorator>
                                    <Edit />
                                </ListItemDecorator >{' '}
                                Edit Details
                                </MenuItem>
                                <MenuItem>
                                <ListItemDecorator />
                                View Details
                                </MenuItem>
                                <ListDivider />
                                <MenuItem variant="soft" color="danger">
                                <ListItemDecorator sx={{ color: 'inherit' }}>
                                    <DeleteForever />
                                </ListItemDecorator>{' '}
                                Delete
                                </MenuItem>
                            </Menu>
                            </Dropdown>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}