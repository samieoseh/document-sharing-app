import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosPrivate from "../useAxiosPrivate";

export default function useFolderMutations() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();
  const createFolderMutation = useMutation({
    mutationFn: async (payload: {name: string, parentId: string  | null}) => {
      const response = await axiosPrivate.post("/folders", {
        name: payload.name,
        parentId: payload.parentId ? payload.parentId : null,
      });
      const data = await response.data;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folders"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    createFolderMutation
  }
}

