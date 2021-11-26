import React from 'react';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div>
            <div className='error'>
                <h3 className='text-center fw-16 fw-bolder fs-1 text-danger'>Ooops! Page Not Found</h3>
            </div>
        </div>
    );
};

export default NotFound;

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

let { path, url } = useRouteMatch();

<div className="dashboard-container ">
<div className="row">
  <div className="col-md-3 ">
    <div className="dashboard">
      <h5>Dashboard</h5>
      <Link to={`${url}`}>
        <li className="dashboard-menu mt-5">DashBoard</li>
      </Link>

      <Link to={`${url}/myorders`}>
        <li className="dashboard-menu mt-5">My Orders</li>
      </Link>

      <Link to={`${url}/review`}>
        <li className="dashboard-menu mt-5">Review</li>
      </Link>
      <div className="admin-dashboard">
        <li className="dashboard-menu mt-5">Orders list</li>

       
          <Link to={`${url}/addproduct`}>
            <li className="dashboard-menu">Add Product</li>
          </Link>
        
        <Link to={`${url}/makeadmin`}>
          <li className="dashboard-menu">Make Admin</li>
        </Link>
        <Link to={`${url}/manageproducts`}>
          <li className="dashboard-menu">Manage Products</li>
        </Link>
      </div>
    </div>
  </div>
  <div className="col-md-9">
    <Switch>
      <Route exact path={path}>
        <Dashboard></Dashboard>
      </Route>
      <Route exact path={`${path}/review`}>
        <Review></Review>
      </Route>
      <Route exact path={`${path}/myorders`}>
        <MyOrders></MyOrders>
      </Route>
      <Route exact path={`${path}/makeadmin`}>
       <MakeAdmin></MakeAdmin>
      </Route>
      <Route exact path={`${path}/addproduct`}>
        <AddProduct></AddProduct>
      </Route>
      <Route exact path={`${path}/manageproducts`}>
        <ManageProducts></ManageProducts>
      </Route>
    </Switch>
  </div>
</div>
</div>