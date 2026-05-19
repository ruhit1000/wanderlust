"use client";
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const DeleteBooking = ({ destinationName, bookingId }) => {
    const router = useRouter();
  const handleDelete = async () => {

    const {data} = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data?.token}`,
      },
    });
    const result = await res.json();

    if (result?.acknowledged) {
      toast.success("Booking deleted successfully!");
      router.refresh();
    } else {
      toast.error("Failed to delete booking. Please try again.");
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="bordered"
        color="danger"
        className="font-medium px-6 py-5 rounded-lg border-red-200 text-red-500 hover:bg-red-50"
      >
        <TrashBin className="w-4 h-4" />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Are you sure you want to delete this booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                tour booking and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}     
      />
    </AlertDialog>
  );
};

export default DeleteBooking;
