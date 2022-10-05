import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledDisabledTextField = styled(TextField)`
.MuiInputBase-root {
  background-color: ${({ theme, value }) =>
        "#F6F6FA"};
}
`

export default StyledDisabledTextField;