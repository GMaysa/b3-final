import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { getProfile } from '../redux/actions/auth';

function Protected({ children }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

const { isLoggedin, token } = useSelector((state) =>
state.auth);

//kalo gada redux dan login maka ke dashboard
useEffect(() => {
    if(!token && !isLoggedin) {
        navigate("/login");
        return;
        };

        // dispatch(getProfile());
        // dispatch(());
    }, [isLoggedin, navigate, token]);

  return children;
}

export default Protected