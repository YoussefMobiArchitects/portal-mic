import React, { useEffect, useState } from 'react';
import { Alert, AlertColor } from '@mui/material';
import "./messageAlert.scss";

interface PropsMessageAlert {
    severity: AlertColor | undefined;
    message: string;
    isShowAlert?: boolean;
}

const MessageAlert = ({ severity, message, isShowAlert }: PropsMessageAlert) => {

    const [alert, setAlert] = useState(isShowAlert);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container-message-alert'>
            {alert &&
                <Alert severity={severity}>{message}</Alert>
            }
        </div>
    );
}

export default MessageAlert;