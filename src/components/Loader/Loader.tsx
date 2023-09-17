import { Box, CircularProgress, LinearProgress, Stack } from "@suid/material";

export default function Loader() {
  return (
    <Box sx={{ width: "100%", marginBlock: "1rem" }}>
      <LinearProgress color="primary" />
    </Box>
  );
}
