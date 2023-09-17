import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@suid/material";
import { AiFillGithub } from "solid-icons/ai";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            alignItems="center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Exip
          </Typography>
          <AiFillGithub size={24} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
