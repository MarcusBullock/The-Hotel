import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.error("Cabins could not be retrieved");
        throw new Error("Cabins could not be retrieved");
    }

    return data;
}

export async function deleteCabin(id) {
    const { error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.error("Cabins could not be deleted");
        throw new Error("Cabins could not be deleted");
    }
}
