import React, { FC } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props> = ({ value, onChange }) => (
  <input
    className="w-full py-1.5 px-3 border rounded-lg duration-150 focus:border-black"
    type="search"
    placeholder="Chiken..."
    value={value}
    onChange={onChange}
  />
);
