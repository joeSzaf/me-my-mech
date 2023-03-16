import { useState } from 'react';
import HeaderWrapper, {
  DropdownLink,
  NavButton,
  SmallHeaderLogoSection,
} from './Header.style';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/legacy/image';
import MechLogo from 'public/images/mmmmai_logo.png';
import Link from 'next/link';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Media', url: '/media' },
  { name: 'Contact', url: '/contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HeaderWrapper position='sticky'>
      <Container maxWidth='md'>
        <Toolbar disableGutters>
          <Box
            className='largeScreenHeader'
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link href={'/'} className='logoSection'>
              <Image
                alt='Me, My Mech and I logo'
                className='badgerLogo'
                src={MechLogo}
                width={320}
                height={72}
              />
            </Link>
          </Box>

          <Box
            className='smallScreenHeader'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                  alignItems: 'center',
                },
              }}
            >
              <SmallHeaderLogoSection href={'/'} className='logoSection'>
                <Image
                  alt='Badger Hub logo'
                  className='badgerLogo'
                  src={MechLogo}
                  style={{ objectFit: 'fill' }}
                  layout='responsive'
                />
              </SmallHeaderLogoSection>
            </Box>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link href={page.url} style={{ textDecoration: 'none' }}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <DropdownLink>{page.name}</DropdownLink>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <NavButton
                key={page.name}
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.url}
                LinkComponent={Link}
              >
                {page.name}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
