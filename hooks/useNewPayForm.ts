import { NewPayInput } from '../types/responses/pay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newPayState } from '../states/atom';
import { useMutation, useQueryClient } from 'react-query';
import { postNewPay } from '../api/pay';

const QUERY_KEY = {
  newPay: 'newPay',
};

export const useNewPayMutation = (memberId: number, onSuccessMutation: () => void) => {
  const newPay = useRecoilValue(newPayState);
  const queryClient = useQueryClient();

  return useMutation(() => postNewPay(memberId, newPay), {
    onSuccess(data) {
      console.log(data);
      queryClient.invalidateQueries([QUERY_KEY.newPay, memberId.toString()]);
      //onSuccessMutation();
    },
  });
};

export const useNewPayForm = (memberId: number, onSuccessMutation: () => void) => {
  const [newPay, setNewPay] = useRecoilState(newPayState);

  const setNewPayForm = (input: Partial<NewPayInput>) => {
    setNewPay({ ...newPay, ...input });
  };

  const submitNewPay = () => {
    //participantMutation.mutate();
  };

  return { newPay, setNewPayForm, submitNewPay };
};
