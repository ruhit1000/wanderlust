"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { Icon } from "@iconify/react";

const LogInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    const { email, password } = user;

    // Updated to use signIn instead of signUp
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (data) {
      toast.success("Logged in successfully!");
      setTimeout(() => {
        redirect("/");
      }, 1000);
    }
    if (error) {
      toast.error(error.message || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm">
              Log in to continue your adventure!
            </p>
          </div>

          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset>
              <FieldGroup className="gap-5">
                <TextField isRequired name="email" type="email">
                  <Label className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <Input placeholder="john@example.com" className="mt-1" />
                  <FieldError className="text-red-500 text-xs mt-1" />
                </TextField>

                <TextField className="w-full" name="password" isRequired>
                  <div className="flex justify-between items-center mt-1">
                    <Label className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                  </div>
                  <InputGroup className="mt-1">
                    <InputGroup.Input
                      className="w-full"
                      type={isVisible ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <InputGroup.Suffix className="pr-0">
                      <Button
                        isIconOnly
                        aria-label={
                          isVisible ? "Hide password" : "Show password"
                        }
                        size="sm"
                        variant="ghost"
                        onPress={() => setIsVisible(!isVisible)}
                      >
                        {isVisible ? (
                          <Eye className="w-5 h-5 text-gray-500" />
                        ) : (
                          <EyeSlash className="w-5 h-5 text-gray-500" />
                        )}
                      </Button>
                    </InputGroup.Suffix>
                  </InputGroup>
                  <FieldError className="text-red-500 text-xs mt-1" />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-8">
                <Button
                  className="w-full bg-[#19A5C3] hover:bg-[#168a9f] text-white font-medium py-6 rounded-lg transition-colors"
                  type="submit"
                >
                  Log In
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          {/* Added a subtle link to redirect users to the Sign Up page */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#19A5C3] font-medium hover:underline"
            >
              Sign up
            </Link>
          </div>
          <Separator className="my-6" />
          <Button
            className="w-full"
            variant="tertiary"
            onClick={handleGoogleSignIn}
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default LogInPage;
