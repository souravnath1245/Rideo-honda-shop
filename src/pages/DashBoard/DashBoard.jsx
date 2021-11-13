import * as React from 'react';
// import {Switch, Route, Link} from "react-router-dom"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardHome from '../../components/SubDashBoard/DashBoardHome/DashboardHome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../../components/SubDashBoard/MakeAdmin/MakeAdmin';
import useAuth from './../../hooks/useAuth';
import AddProducts from './../../components/AddProduct/AddProducts';
import Review from '../../components/SubDashBoard/Review/Review';
import PayLink from '../../components/PayLink/PayLink';
import MyOrders from './../../components/MyOrders/MyOrders';

const drawerWidth = 180;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin, userLogOut} = useAuth();
  console.log(admin)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/"><Button color="inherit">Home</Button></Link><br/>
      <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link><br/>
     {!admin &&
     <Box>
      <Link to={`${url}/paylink`}><Button color="inherit">Pay Link</Button></Link><br/>
      <Link to={`${url}/myorder`}><Button color="inherit">My Order</Button></Link><br/>
      <Link to={`${url}/review`}><Button color="inherit">Review</Button></Link><br/>
      </Box>}
      
      {admin && <Box>
          <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
          <Link to={`${url}/addProducts`}><Button color="inherit">Add A product</Button></Link>
          <Link to={`${url}/addProducts`}><Button color="inherit">Manaze All Orders</Button></Link>
          <Link to={`${url}/addProducts`}><Button color="inherit">Manage Products</Button></Link>
      </Box>}
      <Button onClick={()=>userLogOut()} variant="contained" color="inherit">LogOut</Button><br/>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                       <MakeAdmin/>
                    </Route>
                    <Route path={`${path}/review`}>
                       <Review/>
                    </Route>
                    <Route path={`${path}/addProducts`}>
                        <AddProducts/>
                    </Route>
                    <Route path={`${path}/paylink`}>
                        <PayLink/>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrders/>
                    </Route>
                    
                </Switch>
      </Box>
    </Box>
   );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
