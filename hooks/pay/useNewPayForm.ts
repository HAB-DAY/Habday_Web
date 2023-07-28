import { NewPayInput } from '../../types/responses/pay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newPayState } from '../../states/atom';
import { useMutation, useQueryClient } from 'react-query';
import { postNewPay } from '../../api/pay';

export const useNewPayForm = (onSuccessMutation: () => void, onErrorMutation: () => void) => {
  const [newPay, setNewPay] = useRecoilState(newPayState);

  const newPayMutation = useMutation({
    mutationFn: postNewPay,
    onSuccess: onSuccessMutation,
    onError: onErrorMutation,
  });

  const setNewPayForm = (input: Partial<NewPayInput>) => {
    setNewPay({ ...newPay, ...input });
  };

  const submitNewPay = () => {
    newPayMutation.mutate(newPay);
  };

  return { newPay, setNewPayForm, submitNewPay };
};
