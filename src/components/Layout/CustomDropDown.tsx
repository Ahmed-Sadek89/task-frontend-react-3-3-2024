import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HandleSignOut from "./HandleSignOut";
import { signOutBtnStyle } from "./CustomStyles";

export default function CustomDropDown({ handleDrawerClose }: { handleDrawerClose: () => void }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);


    const navigate = useNavigate()
    const handleMenuItemClick = () => {
        navigate('/task/profile/:id')
        setOpen(false);
    };
    const handleSignOut = HandleSignOut({handleDrawerClose})

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
                    sx={{ cursor: 'pointer' }}
                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                >
                    Ahmed Sadek
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