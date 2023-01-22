import React, { useContext, useMemo, useState } from 'react';
import { IconButton } from '@mui/material';
import { prepareNavLinks } from '../Navbar.helpers';
import { ILink } from '../Navbar.types';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { deleteUserJwt } from '../../../utils/deleteUserJwt';
import { UserContext } from '../../../context';
import { MenuItem, Menu } from './HamburgerMenu.styles';

interface IHamburgerMenu {
  userData: any;
}

const HamburgerMenu = ({ userData }: IHamburgerMenu) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { userToken } = useContext(UserContext);

  const navLinks = useMemo<ILink[]>(() => {
    return prepareNavLinks(userData);
  }, [userData]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    deleteUserJwt();
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        color='primary'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon style={{ width: 40, height: 40, margin: 'unset' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          navLinks.map(({ link, text }: ILink) => (
            <MenuItem key={link} onClick={handleClose}>
              <NavLink key={link} to={link}>{text}</NavLink>
            </MenuItem>
          ))
        }
        {
          userToken && (
            <MenuItem key={'logout'} onClick={handleLogout}>
              <NavLink key={'logout'} to={'/'}>Wyloguj</NavLink>
            </MenuItem>
          )
        }
      </Menu>
    </div>
  );
};

export default HamburgerMenu;