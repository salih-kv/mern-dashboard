import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/julian-wan.jpg";
import { useTheme } from "@emotion/react";
import { ArrowDropDownOutlined } from "@mui/icons-material";

const UserActionsButton = ({ user, isSideBar = false }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <FlexBetween>
      <Button
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          gap: "1rem",
          padding: isSideBar && "1rem 2rem 1rem 3rem",
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="profile"
          height="32px"
          width="32px"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
        <Box
          textAlign="left"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            fontWeight="bold"
            fontSize="0.85rem"
            sx={{ color: theme.palette.secondary[100] }}
          >
            {user.name}
          </Typography>
          <Typography
            fontSize="0.75rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            {user.occupation}
          </Typography>
        </Box>
        {!isSideBar && (
          <ArrowDropDownOutlined
            sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
          />
        )}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </FlexBetween>
  );
};

export default UserActionsButton;
