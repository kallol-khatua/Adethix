import { Typography, Box } from "@mui/material";
import ResetPassword from "./ResetPassword";
import useDocumentTitle from "../../../useDocumentTitle";

function Settings() {
  useDocumentTitle("Settings");

  return (
    <>
      <Box>
        <Typography variant="h6" mb={1}>
          Settings
        </Typography>
      </Box>
      <ResetPassword/>
    </>
  );
}

export default Settings;
