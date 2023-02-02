import { React, Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Redux
import Alert from './components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthTOken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreatingProfile from './components/profile-forms/CreatingProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='profile/:id' element={<Profile />} />
            <Route
              path='dashboard'
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path='create-profile'
              element={<PrivateRoute component={CreatingProfile} />}
            />
            <Route
              path='edit-profile'
              element={<PrivateRoute component={EditProfile} />}
            />
            <Route
              path='/add-experience'
              element={<PrivateRoute component={AddExperience} />}
            />
            <Route
              path='/add-education'
              element={<PrivateRoute component={AddEducation} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
