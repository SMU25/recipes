import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
  isShownHeader?: boolean;
  isShownFooter?: boolean;
}

export const PageLayout: FC<Props> = ({
  children,
  className,
  mainClassName,
  isShownHeader = true,
}) => (
  <div className={cn("flex flex-col h-screen", className)}>
    {isShownHeader && <Header />}

    <main
      className={cn(
        "flex-1 bg-gradient-to-t from-cyan-100/50 to-gray-200/50",
        mainClassName
      )}
    >
      {children}
    </main>
  </div>
);
