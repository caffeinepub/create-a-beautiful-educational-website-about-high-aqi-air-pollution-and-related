import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ChangeRequestInput } from '../backend';

export function useSubmitChangeRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: ChangeRequestInput) => {
      if (!actor) {
        throw new Error('Backend actor not available. Please try again.');
      }
      await actor.submitChangeRequest(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['changeRequests'] });
    },
    onError: (error: any) => {
      console.error('Failed to submit change request:', error);
    },
  });
}
