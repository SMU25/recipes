import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ErrorMessage: FC<Props> = ({ children }) => (
  <div className="flex justify-center items-center h-32 mt-8 border rounded-lg">
    <p className="text-center text-lg">{children}</p>
  </div>
);
