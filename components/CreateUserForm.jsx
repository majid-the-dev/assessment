"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CustomInput from "./CustomInput";
import { userFormSchema } from "@/lib/utils";
import axios from "axios";
import toast from "react-hot-toast";
import { LoaderIcon } from "lucide-react";

const CreateUserForm = ({ type, user, setModal, getUsers }) => {
  const formSchema = userFormSchema();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email || "",
      fullName: user?.fullname || "",
      password: user?.password || "",
      role: user?.role || "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (type === "create-user") {
        const response = await axios.post(
          "https://voyatest3.free.beeceptor.com/api/users",
          {
            email: data.email,
            fullname: data.fullName,
            role: data.role,
            password: data.password,
          }
        );

        if (response.status === 200) {
          toast.success("User created successfully!");
          setModal(false);
          getUsers();
        } else {
          toast.error("Something went wrong!");
        }
      }

      if (type === "edit-user") {
        const response = await axios.put(
          `https://voyatest3.free.beeceptor.com/api/users/${user.email}`,
          {
            email: data.email,
            fullname: data.fullName,
            role: data.role,
            password: data.password,
          }
        );

        if (response.status === 200) {
          toast.success("User edited successfully!");
          setModal(false);
          getUsers();
        } else {
          toast.error("Something went wrong!");
        }
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomInput
          control={form.control}
          name="email"
          label="Email Address"
          placeholder="New User's Email Address"
        />
        <CustomInput
          control={form.control}
          name="fullName"
          label="Full Name"
          placeholder="New User's Full Name"
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-[#475367] font-light">
                Role
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white font-medium px-4 py-5 border border-[#D0D5DD] rounded-[6px] placeholder:text-[#98A2B3] placeholder:text-sm placeholder:font-light">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem value="Administrator">Administrator</SelectItem>
                  <SelectItem value="Sales Manager">Sales Manager</SelectItem>
                  <SelectItem value="Sales Representative">
                    Sales Representative
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <CustomInput
          control={form.control}
          name="password"
          label="Create Password"
          placeholder="Create a Password for New User"
        />
        {type === "create-user" ? (
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D6EFD] text-white text-[16px] font-semibold rounded-[6px] px-4 py-6 hover:bg-[#0D6EFD]/85"
          >
            {loading ? (
              <LoaderIcon size={20} className="animate-spin text-white" />
            ) : (
              <span>Add User</span>
            )}
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D6EFD] text-white text-[16px] font-semibold rounded-[6px] px-4 py-6 hover:bg-[#0D6EFD]/85"
          >
            {loading ? (
              <LoaderIcon size={20} className="animate-spin text-white" />
            ) : (
              <span>Edit User</span>
            )}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default CreateUserForm;
