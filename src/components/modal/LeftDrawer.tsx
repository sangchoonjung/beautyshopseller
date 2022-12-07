import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AiOutlineMenu } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";

export default function LeftDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setState(open);
  };

  const list = (anchor: string) => (
    <Box role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        onClick={() => toggleDrawer(true)}
        sx={{
          color: "white",
          fontSize: 20,
          overflow: "hidden",
          width: "10px",
          maxWidth: "10px",
        }}
      >
        <AiOutlineMenu />
      </Button>

      <Drawer anchor={"left"} open={state} onClose={() => toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </Box>
  );
}
