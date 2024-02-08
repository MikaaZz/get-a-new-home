"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Prisma } from "@prisma/client";

import { createHome } from "@/actions/homes/create";
import { getLoggedUserData } from "@/actions/users/get";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ManagementFormProps } from "../@types";
import { redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  value: z.string().min(0),
});

export default function ManagementForm({ home }: ManagementFormProps) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: home ? home.title : "",
      location: home ? home.location : "",
      value: home ? home.value.toString() : "0",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const user = await getLoggedUserData();

    const newHome: Prisma.HomeCreateInput = {
      title: values.title,
      location: values.location,
      value: parseInt(values.value),
      user: { connect: { id: user?.id } },
    };

    await createHome(newHome);
    router.push("/my-homes");
    router.refresh();
  }

  return (
    <div className="max-w-4xl w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title of your Home</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public home name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category of your Home</FormLabel>
                <FormControl>
                  <Input placeholder="Category" {...field} />
                </FormControl>
                <FormDescription>
                  This is the categorys to filter your home.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location of your Home</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormDescription>
                  This is the location of your home.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>The value of your Home</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="U$" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
