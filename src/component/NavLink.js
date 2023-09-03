import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@mui/material/Link';

export default function NavLink({children,onclick}) {
  return (
    <Link
      sx={{color:'white'}}
      component="button"
      variant="body2"
      onClick={onclick}
    >
      {children}
    </Link>
  );
}