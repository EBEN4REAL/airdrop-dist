// components/ui/ToastRoot.tsx
"use client";
import * as Toast from "@radix-ui/react-toast";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext<(title: string, description: string) => void>(() => {});

export const useRadixToast = () => useContext(ToastContext);

export function ToastRootProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "" });

  const triggerToast = (title: string, description: string) => {
    setToastMessage({ title, description });
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={triggerToast}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className="bg-white border border-zinc-300 rounded-lg p-4 shadow-xl"
        >
          <Toast.Title className="text-sm font-semibold text-black">
            {toastMessage.title}
          </Toast.Title>
          <Toast.Description className="text-sm text-zinc-600 mt-1">
            {toastMessage.description}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-4 right-4 z-50 w-96 max-w-[90vw] outline-none" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
