import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export type NavBarProps = {
    title: string;
};


export const NavBar = ({ title }: NavBarProps): JSX.Element => {

    return (<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
        </AppBar>
    </Box>);
};

export default NavBar;