import { Box, Button, Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { styled } from '@mui/material/styles';
import { cloneElement } from 'react';
const SidebarButton = styled(Button)(({ theme }) => ({
  color: '#FFF',
  border: 'none',
  borderRadius: '20px',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'start',
  flexShrink: '0',
  gap: '10px',
  padding: '7px 15px',
  '.icon': {
    color: theme.palette.error.main,
  },
  '&:hover': {
    border: 'none',
    backgroundColor: theme.palette.error.main,
    '.icon': {
      color: '#FFF',
    },
  },
}));
function Sidebar({ handleCategoryClick, selectedCategory }) {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        '&:hover': {
          visibility: 'visible',
        },
      }}
      visibility="hidden"
      px={{ xs: 2, md: 3 }}
      py={2}
    >
      <Stack
        direction={{ xs: 'row', md: 'column' }}
        visibility="visible"
        // paddingY={2}
        gap={2}
        // height={{ xs: 'auto', md: '95%' }}
        color="white"
      >
        {categories.map((category) => (
          <SidebarButton
            variant="outlined"
            color="error"
            key={category.name}
            sx={{
              bgcolor:
                selectedCategory === category.name
                  ? 'error.main'
                  : 'transparent',
              '.icon': {
                color:
                  selectedCategory === category.name ? '#FFF' : 'error.main',
              },
            }}
            onClick={() => handleCategoryClick(category.name)}
          >
            {cloneElement(category.icon, { className: 'icon' })}
            <span>{category.name}</span>
          </SidebarButton>
        ))}
      </Stack>
    </Box>
  );
}
export default Sidebar;
