import React, { FC, ReactNode, MouseEventHandler, memo } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = memo(
  ({ children, className, variant, type, isDisabled, onClick }) => {
    const combinedClassNames = cn(
      "flex justify-center items-center px-2 font-bold rounded-lg transition ease-in-out duration-200 select-none active:translate-y-0.5 active:duration-150 disabled:opacity-50 disabled:active:translate-y-0 disabled:!cursor-not-allowed",
      BUTTON_STYLE_VARIANTS[variant],
      className
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
);
