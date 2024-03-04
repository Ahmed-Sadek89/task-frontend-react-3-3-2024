import * as React from 'react';
import {Button, ButtonGroup, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function DropDownCategory() {
    const options = ['Asc', "Desc"];
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

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
                variant="contained"
                sx={{ bgcolor: "secondary.dark" }}
                ref={anchorRef}
            >
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleToggle}
                    sx={{ bgcolor: "secondary.dark", "&:hover": { bgcolor: "secondary.dark" } }}
                >
                    {options[selectedIndex]}
                    <ArrowDropDownIcon />
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
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    <MenuItem onClick={() => handleMenuItemClick(0)}>
                                        ASC
                                    </MenuItem>
                                    <MenuItem onClick={() => handleMenuItemClick(1)}>
                                        DESC
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