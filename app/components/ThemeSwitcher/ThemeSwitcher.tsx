"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])
    if(!mounted) {
        return null;
    }

    const handleTheme = () => {
        if(theme === "light"){
            setTheme('dark');
        }else{
            setTheme("light");
        }
    }
  return (
    <button onClick={handleTheme}>ThemeSwitcher</button>
  )
}

export default ThemeSwitcher