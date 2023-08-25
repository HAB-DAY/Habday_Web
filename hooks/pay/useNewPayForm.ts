import { NewPayInput } from '../../types/responses/pay';
import { useRecoilState } from 'recoil';
import { newPayState } from '../../states/atom';
import { useMutation } from 'react-query';
import { postNewPay } from '../../api/pay';

type FromListType = {
  [key: string]: {
    placeholder: string;
    stringFormat: RegExp;
    hyphenFormat: RegExp;
    assignFormat: string;
    maxLength: number;
  };
};

export const useNewPayForm = (onSuccessMutation: () => void, onErrorMutation: () => void) => {
  const [newPay, setNewPay] = useRecoilState(newPayState);

  const newPayMutation = useMutation({
    mutationFn: postNewPay,
    onSuccess: onSuccessMutation,
    onError: onErrorMutation,
  });

  const formList: FromListType = {
    카드번호: {
      placeholder: '0000-0000-0000-0000',
      stringFormat: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
      hyphenFormat: /(\d{4})(?=\d)/g,
      assignFormat: `$1-`,
      maxLength: 16,
    },
    유효기간: {
      placeholder: 'YYYY-MM',
      stringFormat: /([12]\d{3}\-(0[1-9]|1[0-2]))/,
      hyphenFormat: /(\d{4})(\d{2})/g,
      assignFormat: `$1-$2`,
      maxLength: 6,
    },
  };

  const setCardWithHyphen = (input: string) => {
    const { hyphenFormat, assignFormat, maxLength } = formList['카드번호'];
    if (input.replace('-', '').length > maxLength + 2) return;
    const formattedInput = input.replace(/[^0-9]/g, '').replace(hyphenFormat, assignFormat);

    setNewPay({ ...newPay, card_number: formattedInput });
  };

  const setExpiryWithHyphen = (input: string) => {
    const { hyphenFormat, assignFormat, maxLength } = formList['유효기간'];
    if (input.replace('-', '').length > maxLength) return;
    const formattedInput = input.replace(/-/g, '').replace(hyphenFormat, assignFormat);

    setNewPay({ ...newPay, expiry: formattedInput });
  };

  const setNewPayForm = (input: Partial<NewPayInput>) => {
    setNewPay({ ...newPay, ...input });
  };

  const submitNewPay = () => {
    console.log(newPay);
    newPayMutation.mutate(newPay);
  };

  return { newPay, setNewPayForm, submitNewPay, setCardWithHyphen, setExpiryWithHyphen };
};
