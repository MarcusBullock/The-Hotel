import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrUpdateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate: createCabin } = useMutation({
        mutationFn: createOrUpdateCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: () => {
            toast.error("Error creating cabin");
        },
    });

    return { isCreating, createCabin };
}
