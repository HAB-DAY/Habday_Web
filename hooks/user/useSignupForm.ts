import { useState } from 'react';
import { SignupInput } from '../../types/responses/user';
import { useSignupMutation } from './useSignupMutation';

export const useSignupForm = (onSuccessMutation: () => void) => {
  const [form, setForm] = useState<SignupInput>({
    birthday: '',
    bankName: '국민',
    accountNumber: '',
  });
  const submitMutation = useSignupMutation();

  const setSignupForm = (input: Partial<SignupInput>) => {
    setForm({ ...form, ...input });
  };

  const submitForm = () => {
    submitMutation.mutate(form, {
      onSuccess: onSuccessMutation,
    });
  };

  return { form, setSignupForm, submitForm };
};
