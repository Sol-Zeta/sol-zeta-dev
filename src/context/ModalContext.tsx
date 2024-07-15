import { Icons } from "@/components/Icon";
import { IconChildren } from "@/components/Icon/utils";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface OpenModalProps {
  title?: string;
  message?: string;
}

interface ModalContextProps {
  modalIcon?: keyof typeof IconChildren;
  isOpen: boolean;
  modalTitle: string;
  modalMessage: string;
  openModal: (
    content: OpenModalProps,
    icon?: keyof typeof IconChildren
  ) => void;
  onCloseModal: () => void;
  onAcceptModal: (action: () => void) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string>("");
  const [modalIcon, setModalIcon] = useState<keyof typeof IconChildren>(
    Icons.CONTACT
  );

  const openModal = (
    { title = "", message = "" }: OpenModalProps,
    icon?: keyof typeof IconChildren
  ) => {
    setModalTitle(title);
    setModalMessage(message);
    setIsOpen(true);
    if (!icon) return;
    setModalIcon(icon);
  };

  const onCloseModal = () => {
    setIsOpen(false);
    setModalMessage("");
  };

  const onAcceptModal = (accion: () => void) => {
    onCloseModal();
    accion();
  };

  return (
    <ModalContext.Provider
      value={{
        modalIcon,
        isOpen,
        modalTitle,
        modalMessage,
        openModal,
        onCloseModal,
        onAcceptModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
