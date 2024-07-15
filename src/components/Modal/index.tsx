"use client";
import React, { FC, useEffect, useState } from "react";
import { useModal } from "@/context/ModalContext";
import {
  CloseButton,
  ModalBackground,
  ModalContainer,
  Message,
  ButtonContainer,
  Title,
  TitleContainer,
} from "./Modal.styled";
import ReactDOM from "react-dom";
import Icon, { Icons } from "../Icon";
import Button, { ButtonVariants } from "../Button";

interface ModalProps {
  showCancelButton?: boolean;
  cancelButtonMsg?: string;
  showAcceptButton?: boolean;
  acceptButtonMsg?: string;
  onAccept?: () => void;
  isError?: boolean;
}

export const Modal: FC<ModalProps> = ({
  showCancelButton = false,
  cancelButtonMsg = "Cancel",
  showAcceptButton = false,
  acceptButtonMsg = "Accept",
  onAccept,
  isError = false
}) => {
  const {
    isOpen,
    modalTitle,
    modalMessage,
    onCloseModal,
    modalIcon = Icons.ABOUT,
    onAcceptModal,
  } = useModal() || {
    isOpen: false,
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    throw new Error("The 'modal-root' element is not found in the document.");
  }

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const handleAccept = () => {
    if (!onAccept) return;
    onAcceptModal(onAccept);
  };

  return ReactDOM.createPortal(
    <ModalBackground onClick={onCloseModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()} data-testid="modal">
        <CloseButton onClick={onCloseModal} data-testid="close-modal">
          <Icon icon={Icons.CLOSE} width={24} height={24}/>
        </CloseButton>
        <TitleContainer>
          <Icon icon={modalIcon} width={48} height={48} className={`modalIcon ${isError && "isError"}`} isButton={false}/>
          <Title>{modalTitle || "SUCCESS!!!!"}</Title>
        </TitleContainer>
        <Message>
          {modalMessage ||
            "Thanks for your message, you'll hear from me back soon"}
        </Message>
        <ButtonContainer>
          {showAcceptButton && (
            <Button onClick={handleAccept}>{acceptButtonMsg}</Button>
          )}
          {showCancelButton && (
            <Button variant={ButtonVariants.SECONDARY} onClick={onCloseModal}>
              {cancelButtonMsg}
            </Button>
          )}
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>,
    modalRoot
  );
};
