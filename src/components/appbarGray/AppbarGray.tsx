import * as React from 'react';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import "./styles.scss"

export interface Props {
    data: string[],
}

const AppbarGray = ({ data }: Props) => {


    return (
        <div className='grayAppbar' >
            <Box className='subContainerGrayAppbar' sx={{ margin: { xs: "0px 10px", sm: "0px 30px",md:"0px 100px",lg:"0px 165px",xl:"0px 165px" }}}>

                {data.map((data, index) => (

                    <div key={index} className='txtItem'>{data}</div>
                ))}
            </Box>

        </div>
    );
};
export default AppbarGray;