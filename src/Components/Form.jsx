import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Input from "./Input"

export default function Form(props) {
    return (
        <Box sx={{
            margin: "64px auto 0"
        }}
            component="form" noValidate autoComplete="off" maxWidth={256}
            >
            <Input label="username" />
            <Input type="password" label="password" />
            <Button sx={{
                    marginTop: "16px"
                }}
                variant="contained" 
                fullWidth 
                onClick={() => props.setIsLoggedIn(true)}
                >Login
            </Button>
        </Box>
    )
}

