import React from 'react';
type DropdownProps = {
  children: React.ReactNode;
  isActive: boolean;
};
const DropdownWrapper = ({ children, isActive }: DropdownProps) => {
  
  return (
    <div
      className={`absolute hidden lg:block bg-white  ${
        isActive ? 'top-[3.6rem] translate-y-0 z-50' : '-top-10 -translate-y-96 opacity-0'
      } translate-center w-full h-96 shadow-md rounded-md transition-all duration-300 `}>
      {children}
    </div>
  );
};

export default DropdownWrapper;
