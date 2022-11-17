import { useState } from "react";

export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'visibility') {
        setRightIcon('visibility-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'visibility-off') {
        setRightIcon('visibility');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };