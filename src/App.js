
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Userlist from './Userlist';
import Profile from './Profile';



function App() {
  
  return (
    <h1>hello</h1>
    // <Router>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" component={Link} to="/" color="inherit" style={{ textDecoration: 'none' }}>
    //         User List App
    //       </Typography>
    //       <Button component={Link} to="/favorites" color="inherit" style={{ marginLeft: 'auto' }}>
    //         Favorites
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    //   <Routes>
    //     <Route path="/" element={<Userlist />} />
    //     <Route path="/user/:id" element={<Profile />} />
        
    //   </Routes>
    // </Router>
  );
  
}







export default App;
