import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./styles.scss"
import useNavigationApp from '../../hooks/useNavigationApp';


interface PropsData {
    name: string;
    path: string;
}
export interface Props {
    data: PropsData[],
}

const AppbarGray2 = ({ data }: Props) => {
    let arrowForward = ">"
    let navigate = useNavigationApp().navigate;

    const navigateToPage = (path: string) => {
        const nav: string = path as string;
        navigate(nav)
    }

    return (
        <div className='grayAppbar' >
            <Box className='subContainerGrayAppbar' sx={{ margin: { xs: "0px 10px", sm: "0px 30px", md: "0px 100px", lg: "0px 165px", xl: "0px 165px" } }}>

                {data.map((item, index) => (
                    <div className='item-cocumber' key={index.toString()}>
                        <div className='txtItem' onClick={() => navigateToPage(item.path)}>{item.name}</div>
                        {index !== (data.length - 1) &&
                            <div>{arrowForward}</div>
                        }

                    </div>

                ))}
            </Box>

        </div>
    );
};
export default AppbarGray2;