"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button, { ButtonVariants } from "@/components/Button";
import Input, { InputVariants } from "@/components/Input";
import { ContactWrapper, FormContainer } from "@/styles/pages/contact.styled";
import { GetStaticProps } from "next";
import Code from "@/components/Code";
import { Modal } from "@/components/Modal";
import { useModal } from "@/context/ModalContext";
import { useRouter } from "next/router";
import { Icons } from "@/components/Icon";

interface Props {
  NEXT_PUBLIC_EMAIL_SERVICE_ID: string;
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: string;
  NEXT_PUBLIC_EMAIL_PUBLIC_KEY: string;
}

const Contact: React.FC<Props> = ({
  NEXT_PUBLIC_EMAIL_SERVICE_ID,
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
  NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { openModal }: any = useModal();
  const [error, setError] = useState<boolean>(false)

  const SUCCESS_MODAL = {
    content: {
      title: "We're Connected!",
      message: "Your message has been sent. I will get back to you soon.",
    },
    icon: Icons.MESSAGE,
  };
  const ERROR_MODAL = {
    content: {
      title: "Oops, Something Went Wrong!",
      message:
        "Looks like there was an issue sending your message. Please try again later or contact me through LinkedIn instead.",
    },
    icon: Icons.ERROR,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef?.current) return;
    emailjs
      .sendForm(
        NEXT_PUBLIC_EMAIL_SERVICE_ID,
        NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setError(false)
          openModal(SUCCESS_MODAL.content, SUCCESS_MODAL.icon);
        },
        (error) => {
          console.log("FAILED...", error);
          setError(true)
          openModal(ERROR_MODAL.content, ERROR_MODAL.icon);
        }
      );
  };

  return (
    <ContactWrapper>
      <Code codeLines={[{ id: "form-lines", comment: "Send me a message" }]} />
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="user_name"
          label="_name"
          variant={InputVariants.OUTLINED}
          required
        />
        <Input
          name="user_email"
          label="_email"
          variant={InputVariants.OUTLINED}
          type="email"
          required
        />
        <Input
          name="message"
          label="_message"
          variant={InputVariants.OUTLINED}
          type="textarea"
          rows={5}
          required
        />
        <Button variant={ButtonVariants.PRIMARY} onClick={() => {}}>
          submit-message
        </Button>
      </FormContainer>
      <Modal
        onAccept={() => router.push("/")}
        acceptButtonMsg="Go to Home"
        showAcceptButton
        showCancelButton
        cancelButtonMsg="Close"
        isError={error}
      />
    </ContactWrapper>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = () => {
  const {
    NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  } = process.env;

  return {
    props: {
      NEXT_PUBLIC_EMAIL_SERVICE_ID: NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID: NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
      NEXT_PUBLIC_EMAIL_PUBLIC_KEY: NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "",
    },
  };
};
