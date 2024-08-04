import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "min-h-full flex items-center justify-center bg-gradient-to-br from-red-600 to-blue-600 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg shadow-lg p-6 w-full overflow-hidden">
        <h1 className="text-center text-xl font-bold text-black mb-4">Study Showdown</h1>
        <div className="bg-white bg-opacity-50 rounded p-4 w-full">{children}</div>
      </div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col m-3 space-y-5 min-w-[15rem] h-full rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
