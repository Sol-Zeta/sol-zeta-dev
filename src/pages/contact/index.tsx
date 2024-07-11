import React, { FormEventHandler, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button, { ButtonVariants } from "@/components/Button";
import Input, { InputVariants } from "@/components/Input";
import { ContactWrapper, FormContainer } from "@/styles/pages/contact.styled";
import { env } from "@/utils/global";
import { GetStaticProps } from "next";

interface Props {
  EMAIL_SERVICE_ID: string;
  EMAIL_TEMPLATE_ID: string;
  EMAIL_PUBLIC_KEY: string;
}

const Contact: React.FC<Props> = ({
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef?.current) return;
    emailjs
      .sendForm(EMAIL_SERVICE_ID || "", EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: EMAIL_PUBLIC_KEY || "PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <ContactWrapper>
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
          type='textarea'
          required
        />
        <Button variant={ButtonVariants.SECONDARY} onClick={() => {}}>
          submit-message
        </Button>
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = () => {
  const { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY } = process.env;

  return {
    props: {
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      EMAIL_PUBLIC_KEY,
    },
  };
};
