// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window?: () => Window;
// }

// export default function Sidebar(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);

//   const handleDrawerClose = () => {
//     setIsClosing(true);
//     setMobileOpen(false);
//   };

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//        <ListItem disablePadding sx={{ display: 'block' }}>
//       <ListItemButton
//       sx={{
//         minHeight: 48,
//         justifyContent: mobileOpen ? 'initial' : 'center',
//         px: 2.5,
//       }}
//     >
//       <ListItemIcon
//         sx={{
//           minWidth: 0,
//           mr: mobileOpen ? 3 : 'auto',
//           justifyContent: 'center',
//         }}
//       >
//         <InboxIcon />
//       </ListItemIcon>
//       <ListItemText primary="Home" sx={{ opacity: mobileOpen ? 1 : 0 }} />
//     </ListItemButton>
//   </ListItem>
//   <ListItem disablePadding sx={{ display: 'block' }}>
//     <ListItemButton
//       sx={{
//         minHeight: 48,
//         justifyContent: mobileOpen ? 'initial' : 'center',
//         px: 2.5,
//       }}
//     >
//       <ListItemIcon
//         sx={{
//           minWidth: 0,
//           mr: mobileOpen ? 3 : 'auto',
//           justifyContent: 'center',
//         }}
//       >
//         <InboxIcon />
//       </ListItemIcon>
//       <ListItemText primary="order" sx={{ opacity: mobileOpen ? 1 : 0 }} />
//     </ListItemButton>
//   </ListItem>
// </List>

//       <Divider />
//       {/* <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   // Remove this const when copying and pasting into your project.
//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerClose}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           slotProps={{
//             root: {
//               keepMounted: true, // Better open performance on mobile.
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
       
    
//       </Box>
//     </Box>
//   );
// }








// import * as React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import ReplayIcon from '@mui/icons-material/Replay';
// import SettingsIcon from '@mui/icons-material/Settings';


// const drawerWidth = 240;

// interface Props {
//   window?: () => Window;
//   children: React.ReactNode;
// }

// export default function Sidebar(props: Props) {
//   const { window, children } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);

//   const handleDrawerClose = () => {
//     setIsClosing(true);
//     setMobileOpen(false);
//   };

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//   <ListItem disablePadding sx={{ display: 'block' }}>
//     <ListItemButton component={Link} to='/' sx={{ px: 2.5 }}>
//       <ListItemIcon><DashboardIcon /></ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//   </ListItem>

//   <ListItem disablePadding sx={{ display: 'block' }}>
//     <ListItemButton component={Link} to='/order' sx={{ px: 2.5 }}>
//       <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
//       <ListItemText primary="Order" />
//     </ListItemButton>
//   </ListItem>

//   <ListItem disablePadding sx={{ display: 'block' }}>
//     <ListItemButton component={Link} to='/products' sx={{ px: 2.5 }}>
//     <ListItemIcon><Inventory2Icon /></ListItemIcon>
//       <ListItemText primary="Products" />
//     </ListItemButton>
//   </ListItem>
//   <ListItem disablePadding sx={{ display: 'block' }}>
//   <ListItemButton component={Link} to='/shipping' sx={{ px: 2.5 }}>
//     <ListItemIcon><LocalShippingIcon /></ListItemIcon>
//     <ListItemText primary="Shipping" />
//   </ListItemButton>
// </ListItem>

// <ListItem disablePadding sx={{ display: 'block' }}>
//   <ListItemButton component={Link} to='/refund' sx={{ px: 2.5 }}>
//     <ListItemIcon><ReplayIcon /></ListItemIcon>
//     <ListItemText primary="Refund" />
//   </ListItemButton>
// </ListItem>

// <ListItem disablePadding sx={{ display: 'block' }}>
//   <ListItemButton component={Link} to='/settings' sx={{ px: 2.5 }}>
//     <ListItemIcon><SettingsIcon /></ListItemIcon>
//     <ListItemText primary="Settings" />
//   </ListItemButton>
// </ListItem>

// </List>
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//    return (
//   <Box sx={{ display: 'flex' }}>
//        <CssBaseline />
//        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
//          <Toolbar>
//            <IconButton
//              color="inherit"
//              aria-label="open drawer"
//              edge="start"
//              onClick={handleDrawerToggle}
//              sx={{ mr: 2, display: { sm: 'none' } }}
//            >
//              <MenuIcon />
//            </IconButton>
//            <Typography variant="h6" noWrap component="div">
//              Merchant Dashboard
//            </Typography>
//          </Toolbar>
//        </AppBar>
//        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="sidebar">
//          <Drawer
//            container={container}
//            variant="temporary"
//            open={mobileOpen}
//            onTransitionEnd={handleDrawerTransitionEnd}
//            onClose={handleDrawerClose}
//            ModalProps={{ keepMounted: true }}
//            sx={{
//             display: { xs: 'block', sm: 'none' },
//              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//            }}
//        >
//            {drawer}
//          </Drawer>
//          <Drawer
//            variant="permanent"
//            sx={{
//              display: { xs: 'none', sm: 'block' },
//              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//            }}
//            open
//          >
//            {drawer}
//          </Drawer>
//        </Box>
//        <Box
//          component="main"
//          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//        >
//          <Toolbar />
//          {children}
//        </Box>
//      </Box>
//    );
// }



// import React from 'react';
// import {
//   // AppBar,
//   Box,
//   CssBaseline,
//   Divider,
//   Drawer,
//   // IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import ReplayIcon from '@mui/icons-material/Replay';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// // import Uperbar from './Uperbar';

// const drawerWidth = 240;

// export default function Sidebar() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const location = useLocation();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         p: 2,
//       }}
//     >
//       {/* Top Section */}
//       <Box>
//         <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
//           MERCHANT
//         </Typography>
//         <List>
//           {[
//             { text: 'Dashboard', icon: <DashboardIcon />, to: '/' },
//             { text: 'Order', icon: <ShoppingCartIcon />, to: '/order' },
//             { text: 'Products', icon: <Inventory2Icon />, to: '/products' },
//             { text: 'Shipping', icon: <LocalShippingIcon />, to: '/shipping' },
//             { text: 'Refund', icon: <ReplayIcon />, to: '/refund' },
//             { text: 'Settings', icon: <SettingsIcon />, to: '/settings' },
//           ].map((item, index) => (
//             <ListItem disablePadding key={index}>
//               <ListItemButton
//                 component={Link}
//                 to={item.to}
//                 sx={{
//                   px: 2.5,
//                   borderRadius: 2,
//                   my: 0.5,
//                   '&.Mui-selected': {
//                     backgroundColor: '#1f3260',
//                     color: '#fff',
//                     '& .MuiListItemIcon-root': {
//                       color: '#fff',
//                     },
//                   },
//                 }}
//                 selected={location.pathname === item.to}
//               >
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Box>

//       {/* Bottom Section */}
//       <Box sx={{ px: 2, mt: 4 }}>
//   <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1, color: '#000', textAlign: 'center' }}>
//     Customer Support
//   </Typography>

//   <Typography
//     variant="body2"
//     sx={{
//       mb: 2,
//       fontSize: '13px',
//       color: '#3d3d3d',
//       lineHeight: 1.4,
//     }}
//   >
//     Ask you query, place requests or important issues. Our support team will contact 24/7 to you.
//   </Typography>

//   <Box
//     sx={{
//       backgroundColor: '#1f3260',
//       color: '#fff',
//       px: 2,
//       py: 1,
//       borderRadius: 2,
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: 1,
//       cursor: 'pointer',
//       fontWeight: 'bold',
//       fontSize: '14px',
//       boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
//     }}
//   >
//     <span style={{ display: 'inline-flex', alignItems: 'center' }}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         height="18"
//         viewBox="0 0 24 24"
//         fill="white"
//         style={{ marginRight: 4 }}
//       >
//         <path d="M0 0h24v24H0z" fill="none" />
//         <path d="M12 2C6.48 2 2 6.48 2 12c0 2.41.87 4.61 2.34 6.33L2 22l3.67-2.34C7.39 21.13 9.59 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
//       </svg>
//       Connect Now
//     </span>
//   </Box>

//   <Divider sx={{ my: 2 }} />

//   <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       px: 1,
//       fontSize: '12px',
//       color: '#333',
//     }}
//   >
//     <Typography
//       variant="caption"
//       sx={{
//         cursor: 'pointer',
//         '&:hover': { textDecoration: 'underline', color: '#1f3260' },
//       }}
//     >
//       Terms & Services
//     </Typography>
//     <Typography
//       variant="caption"
//       sx={{
//         cursor: 'pointer',
//         '&:hover': { textDecoration: 'underline', color: '#1f3260' },
//       }}
//     >
//       Privacy Policy
//     </Typography>
//   </Box>
// </Box>

//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       {/* <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//           backgroundColor: '#1f3260',
//         }}
//       > */}
//         {/* <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar> */}
//         {/* <Uperbar/> */}
//       {/* </AppBar> */}

//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }




import React from 'react';
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReplayIcon from '@mui/icons-material/Replay';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, Outlet, useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
          MERCHANT
        </Typography>
        <List>
          {[ 
            { text: 'Dashboard', icon: <DashboardIcon />, to: '/' },
            { text: 'Order', icon: <ShoppingCartIcon />, to: '/order' },
            { text: 'Products', icon: <Inventory2Icon />, to: '/products' },
            { text: 'Shipping', icon: <LocalShippingIcon />, to: '/shipping' },
            { text: 'Refund', icon: <ReplayIcon />, to: '/refund' },
            { text: 'Settings', icon: <SettingsIcon />, to: '/settings' },
          ].map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton
                component={Link}
                to={item.to}
                sx={{
                  px: 2.5,
                  borderRadius: 2,
                  my: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: '#1f3260',
                    color: '#fff',
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                }}
                selected={location.pathname === item.to}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ px: 2, mt: 4 }}>
        <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1, color: '#000', textAlign: 'center' }}>
          Customer Support
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            fontSize: '13px',
            color: '#3d3d3d',
            lineHeight: 1.4,
          }}
        >
          Ask your query, place requests or important issues. Our support team will contact you 24/7.
        </Typography>

        <Box
          sx={{
            backgroundColor: '#1f3260',
            color: '#fff',
            px: 2,
            py: 1,
            borderRadius: 2,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginRight: 4 }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.41.87 4.61 2.34 6.33L2 22l3.67-2.34C7.39 21.13 9.59 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            Connect Now
          </span>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 1,
            fontSize: '12px',
            color: '#333',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline', color: '#1f3260' },
            }}
          >
            Terms & Services
          </Typography>
          <Typography
            variant="caption"
            sx={{
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline', color: '#1f3260' },
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Drawer Component */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
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

      {/* Main Content Section */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
