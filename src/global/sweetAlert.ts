import Swal from "sweetalert2";
export const signOutAlert = () => {
    return Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#1976d2",
        confirmButtonText: "Yes"
    })
};
export const addEditTaskSuccess = (text: string) => {
    return Swal.fire({
        title: "Good job!",
        text,
        icon: "success"
    })
}
export const deleteTaskAlert = (id: number) => {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#1976d2",
        confirmButtonText: "Yes, delete it!"
    })
}