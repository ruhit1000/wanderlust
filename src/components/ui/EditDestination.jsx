"use client";
import { authClient } from "@/lib/auth-client";
import { Pencil } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  FieldError,
  ListBox,
  TextArea,
  Spinner,
  Form,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const EditDestination = ({ destination }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    destinationName,
    country,
    duration,
    price,
    departureDate,
    description,
    imageUrl,
    category,
    _id,
  } = destination;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const {data:tokenData} = await authClient.token();

    const res = await fetch(
      `http://localhost:5000/destinations/${destination._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(data),
      },
    );
    const result = await res.json();
    setLoading(false);
    if (result?.acknowledged) {
      toast.success("Destination updated successfully!");
      router.refresh();
    }
  };

  return (
    <Modal>
      <Button variant="outline">
        <Pencil className="w-4 h-4" />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Travel Package</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Make changes to the travel package details below
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="p-10 space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                      >
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select
                        name="category"
                        isRequired
                        className="w-full"
                        defaultValue={category}
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={price}
                      name="price"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField
                      defaultValue={duration}
                      name="duration"
                      isRequired
                    >
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl h-40 p-4"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      {loading ? <Spinner color="current" /> : "Save Changes"}
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </Modal>
  );
};

export default EditDestination;
