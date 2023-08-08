import { useState } from 'react';
import { SignupInput } from '../../types/responses/user';
import { useSignupMutation } from './useSignupMutation';

type bankListType = {
  [key: string]: {
    placeholder: string;
    accountFormat: RegExp;
    hyphenFormat: RegExp;
    assignFormat: string;
    maxLength: number;
  };
};

export const useSignupForm = (onSuccessMutation: () => void) => {
  const [form, setForm] = useState<SignupInput>({
    birthday: '',
    bankName: '신한(구)',
    accountNumber: '',
  });
  const submitMutation = useSignupMutation();

  const bankList: bankListType = {
    '신한(구)': {
      placeholder: 'XXX-XX-XXXXXX',
      accountFormat: /^\d{3}-\d{2}-\d{6}$/,
      hyphenFormat: /^(\d{0,3})(\d{0,2})(\d{0,6})$/g,
      assignFormat: `$1-$2-$3`,
      maxLength: 11,
    },
    '신한(신)': {
      placeholder: 'XXX-XXX-XXXXXX',
      accountFormat: /^\d{3}-\d{3}-\d{6}$/,
      hyphenFormat: /^(\d{0,3})(\d{0,3})(\d{0,6})$/g,
      assignFormat: `$1-$2-$3`,
      maxLength: 12,
    },
    국민: {
      placeholder: 'XXXXXX-XX-XXXXXX',
      accountFormat: /^\d{6}-\d{2}-\d{6}$/,
      hyphenFormat: /^(\d{0,6})(\d{0,2})(\d{0,6})$/g,
      assignFormat: `$1-$2-$3`,
      maxLength: 14,
    },
    우리: {
      placeholder: 'XXXX-XXX-XXXXXX',
      accountFormat: /^\d{4}-\d{3}-\d{6}$/,
      hyphenFormat: /^(\d{0,4})(\d{0,3})(\d{0,6})$/g,
      assignFormat: `$1-$2-$3`,
      maxLength: 13,
    },
    하나: {
      placeholder: 'XXX-XXXXX-XXXXX',
      accountFormat: /^\d{3}-\d{6}-\d{5}$/,
      hyphenFormat: /^(\d{0,3})(\d{0,6})(\d{0,5})$/g,
      assignFormat: `$1-$2-$3`,
      maxLength: 14,
    },
  };

  const setAccountInput = (account: string) => {
    const { hyphenFormat, assignFormat, maxLength } = bankList[form.bankName];
    if (account.replace('-', '').length > maxLength + 1) return;
    const formattedInput = account
      .replace(/[^0-9]/g, '')
      .replace(hyphenFormat, assignFormat)
      .replace(/\-{1,2}$/g, '');

    setForm({ ...form, accountNumber: formattedInput });
  };

  const setSignupForm = (input: Partial<SignupInput>) => {
    setForm({ ...form, ...input });
  };

  const submitForm = () => {
    if (!bankList[form.bankName].accountFormat.test(form.accountNumber)) {
      alert(
        `계좌번호 형식이 올바르지 않습니다.\n다시 입력해주세요.('-'포함 숫자 ${bankList[form.bankName].maxLength}자리)`
      );
    } else {
      submitMutation.mutate(form, {
        onSuccess: onSuccessMutation,
      });
    }
  };

  return {
    placeholder: bankList[form.bankName].placeholder,
    banknames: Object.keys(bankList),
    setSignupForm,
    submitForm,
    setAccountInput,
    form,
  };
};
