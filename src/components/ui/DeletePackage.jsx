"use client";
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const DeletePackage = ({ packageName, id }) => {

  const router = useRouter();

  const handleDelete = async () => {
    const {data} = await authClient.token();
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${data?.token}`,
      }
    });
    const result = await res.json();
    if (result?.acknowledged) {
      toast.success("Package deleted successfully!");
      router.push("/destinations");
    }
  }
  
  return (
    <AlertDialog>
      <Button variant="danger">
        <TrashBin className="w-4 h-4" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete package permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to delete <strong>{packageName}</strong>? This action cannot be undone and will permanently remove this travel package from the system.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Package
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

export default DeletePackage;
