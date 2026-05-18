"use client";
import React from "react";
import { Pencil } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UpdateUserModal = ({ user, onSubmit }) => {
  const { name, image } = user || {};

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Updated Profile Data:", data);
    }
  };

  return (
    <Modal>
      {/* Modal Trigger Button */}
      <Button className="w-full bg-[#19A5C3] hover:bg-[#168a9f] text-white font-medium py-5 rounded-lg transition-colors">
        <Pencil className="w-4 h-4 mr-2" />
        Edit Profile
      </Button>

      {/* Modal Content */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-sky-100 text-[#19A5C3]">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-gray-500">
                Update your personal information below.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6 pt-2">
              <Surface variant="default">
                <form
                  id="edit-profile-form"
                  className="flex flex-col gap-5"
                  onSubmit={handleProfileUpdate}
                >
                  <TextField className="w-full" name="name" defaultValue={name || ""}>
                    <Label className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      className="mt-1"
                    />
                  </TextField>

                  <TextField className="w-full" name="image" defaultValue={image || ""}>
                    <Label className="text-sm font-medium text-gray-700">
                      Profile Image URL
                    </Label>
                    <Input
                      type="url"
                      className="mt-1"
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer className="px-6 py-4">
              <Button
                slot="close"
                variant="outline"
                className="text-gray-600 border-gray-200"
              >
                Cancel
              </Button>
              <Button
                slot="close"
                type="submit"
                form="edit-profile-form"
                className="bg-[#19A5C3] text-white"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateUserModal;
