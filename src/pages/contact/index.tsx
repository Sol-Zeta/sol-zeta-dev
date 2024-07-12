import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button, { ButtonVariants } from "@/components/Button";
import Input, { InputVariants } from "@/components/Input";
import { ContactWrapper, FormContainer } from "@/styles/pages/contact.styled";
import { GetStaticProps } from "next";
import Code from "@/components/Code";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef?.current) return;
    emailjs
      .sendForm(
        NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "PUBLIC_KEY",
        }
      )
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
      <Code codeLines={[{id: 'form-lines', comment: 'Send me a message'}]}/>
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
      NEXT_PUBLIC_EMAIL_SERVICE_ID,
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    },
  };
};
