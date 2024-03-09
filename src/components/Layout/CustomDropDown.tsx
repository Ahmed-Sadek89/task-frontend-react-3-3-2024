import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HandleSignOut from "./HandleSignOut";
import { signOutBtnStyle } from "./CustomStyles";
import { getDecodedToken } from "../../global/getDecodedToken";
import Cookies from "js-cookie";

export default function CustomDropDown({ handleDrawerClose }: { handleDrawerClose: () => void }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const token = Cookies.get('authorization') || ''
    let decoded = getDecodedToken(token);

    const navigate = useNavigate()
    const handleMenuItemClick = () => {
        navigate('/task/profile/:id')
        handleDrawerClose()
        setOpen(false);
    };
    const handleSignOut = HandleSignOut({ handleDrawerClose })

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <ButtonGroup
                variant="text"
                ref={anchorRef}
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                <Typography
                    variant='subtitle1'
                    sx={{ cursor: 'pointer', textTransform: "capitalize" }}
                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                >
                    {decoded.user.username}
                </Typography>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon sx={{ color: 'secondary.light' }} />
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    <MenuItem
                                        onClick={() => handleMenuItemClick()}
                                    >
                                        Profile
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => handleSignOut()}
                                        sx={signOutBtnStyle}
                                    >
                                        Sign out
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}