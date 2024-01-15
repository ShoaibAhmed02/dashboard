import React from 'react';

export const AllUsers = ({ size = 18, ...rest }) => {
    return (
        <svg fill="#FEB45F" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 5.5a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd" /> 
            <path d="M4.25 10A3.75 3.75 0 00.5 13.75v.5a.75.75 0 001.5 0v-.5a2.25 2.25 0 012.25-2.25h3.5A2.25 2.25 0 0110 13.75v.5a.75.75 0 001.5 0v-.5A3.75 3.75 0 007.75 10h-3.5zM11.25 10.75A.75.75 0 0112 10h.25a3.25 3.25 0 013.25 3.25v1a.75.75 0 01-1.5 0v-1a1.75 1.75 0 00-1.75-1.75H12a.75.75 0 01-.75-.75zM11.273 2.24a.75.75 0 00-.546 1.396 2.001 2.001 0 010 3.728.75.75 0 00.546 1.397 3.501 3.501 0 000-6.522z" />
        </svg>
    );
};