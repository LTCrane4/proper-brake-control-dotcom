import { AppBar, Box, Link, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavMenu } from "./NavMenu";
import { useState } from 'react';

export type NavBarProps = {
    title: string;
};


export const NavBar = ({ title }: NavBarProps): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState<null | HTMLButtonElement>(null);

    return (<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Toolbar>
                <NavMenu open={Boolean(menuOpen)} anchorEl={menuOpen} setOpen={setMenuOpen}>
                    <MenuItem>
                        <Link href="/home">
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/about">
                            About
                        </Link>
                    </MenuItem>
                </NavMenu>
            </Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingRight: '97px' }}>{title}</Typography>
        </AppBar>
    </Box>);
};

export default NavBar;