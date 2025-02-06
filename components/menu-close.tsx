// components/menu-close.tsx

"use client";
import { MdClose } from "react-icons/md";

import { closeNav } from "@/lib/features/navigation/navigationSlice";
import { useAppDispatch } from "@/lib/hooks";
const MenuClose = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(closeNav());
  };

  return (
    <button className="p-2" onClick={handleClick}>
      <MdClose className="text-2xl text-foreground" />
    </button>
  );
};

export default MenuClose;
