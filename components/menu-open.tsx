// components/menu-open.tsx
"use client";
import { MdMenu } from "react-icons/md";

import { openNav } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch } from "@/lib/hooks";

const MenuOpen = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openNav());
  };

  return (
    <button className="p-2" onClick={handleClick}>
      <MdMenu className="text-2xl text-foreground" />
    </button>
  );
};

export default MenuOpen;
