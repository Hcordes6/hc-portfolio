'use client';

import React from 'react';

export type DockItemData = {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  panelHeight?: number;
  showLabels?: boolean;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  showLabels?: boolean;
};

function DockItem({
  children,
  className = '',
  onClick,
  showLabels = false
}: DockItemProps) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#060010] border-neutral-700 border-2 shadow-md cursor-pointer transition-colors hover:bg-[#0a0015] ${className}`}
      tabIndex={0}
      role="button"
    >
      {children}
    </div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

function DockLabel({ children, className = '' }: DockLabelProps) {
  return (
    <span className={`${className} text-sm text-white whitespace-nowrap font-medium`}>
      {children}
    </span>
  );
}


export default function Dock({
  items,
  className = '',
  panelHeight = 64,
  showLabels = false
}: DockProps) {
  return (
    <div className="mx-2 flex max-w-full items-center">
      <div
        className={`${className} flex items-center w-fit gap-3 rounded-2xl border-neutral-700 border-2 py-2 px-4`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            showLabels={showLabels}
          >
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </div>
    </div>
  );
}
