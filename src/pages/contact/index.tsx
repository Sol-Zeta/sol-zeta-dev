import Code from '@/components/Code';
import IdeLayout from '@/components/IdeLayout';
import Input from '@/components/Input';
import { ContactWrapper, FormContainer } from '@/styles/pages/contact.styled';
import React from 'react';

interface Props {
  exampleProp?: string;
}

const Contact: React.FC<Props> = () => {
  const formCode = [
    {
      comment: 'Fill your '
    }
  ]
  return (
    <ContactWrapper>
      <FormContainer>
        <Input />
      </FormContainer>
    </ContactWrapper>
  );
};

export default Contact;