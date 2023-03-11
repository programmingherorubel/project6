import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/posts/1")
    }, []);
    return;
}

export default Redirect