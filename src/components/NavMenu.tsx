import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import { MouseEvent, ReactNode } from 'react';

export type NavBarProps = { anchorEl: null | HTMLButtonElement, open: boolean, setOpen: (newState: any) => void, children: ReactNode };


export const NavMenu = ({ anchorEl, open, setOpen, children }: NavBarProps): JSX.Element => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return <>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
            <MenuIcon />
        </IconButton>
        <Menu id="main-menu" open={open} anchorEl={anchorEl} onClose={handleClose}>
            {children}
        </Menu>
    </>;
};

export default Menu;