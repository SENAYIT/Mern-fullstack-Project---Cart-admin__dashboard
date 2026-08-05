import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
