import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextFieldEmpty = styled(TextField)`
.MuiInputBase-root {
  background-color: ${({ theme, value }) =>
        !value && "#F6F6FA"};
}
`

export default StyledTextFieldEmpty;
