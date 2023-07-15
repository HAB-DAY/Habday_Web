import { NewPayInput } from '../types/responses/pay';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newPayState } from '../states/atom';
import { useMutation, useQueryClient } from 'react-query';
import { postNewPay } from '../api/pay';
import { QUERY_KEY } from '.';

// export const useNewPayMutation = (memberId: number, onSuccessMutation: () => void, onErrorMutation: () => void) => {
//   const queryClient = useQueryClient();
//   const newPay = useRecoilValue(newPayState);

//   return useMutation(() => postNewPay(memberId, newPay) {
//     onSuccess(data) {
//       console.log(data);
//       queryClient.invalidateQueries([QUERY_KEY.newPay, memberId.toString(), QUERY_KEY.fundDetail]);
//       //onSuccessMutation();
//     },
//   }, {onError(data) {
//     onErrorMutation();
//   }});
// };

export const useNewPayForm = (memberId: number, onSuccessMutation: () => void, onErrorMutation: () => void) => {
  const [newPay, setNewPay] = useRecoilState(newPayState);
  //const newPayMutation = useNewPayMutation(memberId, onSuccessMutation, onErrorMutation);

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
