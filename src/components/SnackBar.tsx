import React, {useEffect} from 'react';
import "./SnackBar.css";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SnackbarType = {
    message: string | null
    setMessage: (message: string | null) => void
}

export const Snackbar = ({message, setMessage}: SnackbarType) => {

    useEffect(() => {
        if (message) {
            toast.success(message);
            setMessage(null);
        }
    }, [message]);

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover
            />
        </>
    );
};