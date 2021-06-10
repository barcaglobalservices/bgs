import React, { useEffect, useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { API, Auth } from 'aws-amplify';
import { listCompanys } from '../graphql/queries';
import { deleteCompany as deleteCompanyMutation } from '../graphql/mutations';
import CompanyForm from '../components/Company/CompanyForm';


//initialCompany Form state. 


function Company() {
  const [companys, setCompanys] = useState([]);
  
  useEffect(() => {
    fetchCompanys();
  }, []);
  
  console.log(Auth.currentUserInfo)



  async function fetchCompanys() {
    const apiData = await API.graphql({ query: listCompanys });
    setCompanys(apiData.data.listCompanys.items);
  }
  async function deleteCompany({ id }) {
    const newCompanyArray = companys.filter(company => company.id !== id);
    setCompanys(newCompanyArray);
    await API.graphql({ query: deleteCompanyMutation, variables: { input: { id } } });
  }

 

  return (
    <>
      <div>
        <h1>
          Check all our partners
         </h1>
         
         <CompanyForm />

        <h1>All Partners</h1>
        
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companys.map((company) => (
                <TableRow key={company.id}>
                  <TableCell align="left">{company.name}</TableCell>
                  <TableCell align="left">{company.country}</TableCell>
                  <TableCell align="left">{company.city}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => deleteCompany(company)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>


    </>
  )
}

export default withAuthenticator(Company);
