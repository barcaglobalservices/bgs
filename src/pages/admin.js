import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Products from '../components/Admin/Products'
import Warehouse from '../components/Admin/Warehouse';
import Company from '../components/Admin/Company';
import Orders from '../components/Admin/Orders';
import Customers from '../components/Admin/Customers';
import Inventory from '../components/Admin/Inventory';
import Blog from './blog';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },

}));

function Admin() {
    const classes = useStyles();

    // Declare a new state variable, which we'll call "count"

    return (
        
            <div className="adminSection">
                <div className="sidemenu">
                    <Paper className={classes.paper}>
                        <MenuList>
                            <MenuItem>
                                <Link to="/admin/company">
                                Company
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/admin/inventory">
                                Inventory
                                </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/admin/products">
                                Products
                                </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/admin/warehouse">
                                Warehouse
                                </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/admin/features">
                                New Features
                                </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/admin/customers">
                                Customers
                                </Link>
                            </MenuItem>
                            <MenuItem>
                            <Link to="/admin/orders">
                                Orders
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </div>
                <div className="adminContainer">
                <Switch>
                    <Route path="/admin/products" exact component={Products} />
                    <Route path="/admin/warehouse" exact component={Warehouse} />
                    <Route path="/admin/inventory" exact component={Inventory} />
                    <Route path="/admin/features" exact component={Blog} />
                    <Route path="/admin/customers" exact component={Customers} />
                    <Route path="/admin/company" exact component={Company} />
                    <Route path="/admin/orders" exact component={Orders} />
                </Switch>

            </div>
</div>
        
    );
}
export default Admin
