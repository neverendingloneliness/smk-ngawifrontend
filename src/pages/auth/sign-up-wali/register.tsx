import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

const formSchema = z.object({
    namawali: z.string().min(2, {
      message: "Nama Wali must be at least 2 characters.",
    }),
    phone: z.string().min(2, {message : "Phone number must be at least 2 characters "}),
    pekerjaan: z.string().min(2, {message:"Pekerjaan wali must be filled"}),
    alamat: z.string().min(2, {message: "Alamat Wali must be filled"})
  })

const RegisterWali = () => {
    const form = useForm<z.infer<typeof formSchema>>({
              resolver: zodResolver(formSchema),
              defaultValues: {
                namawali: "",
                phone:"",
                pekerjaan:"",
                alamat:""
              },
            })
      
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }
  
    return (
    <div className='flex flex-col justify-center items-center mt-10 '>
        <h1 className='text-2xl font-bold '>Registrasi Wali <span className='text-yellow-400'>Peserta</span>  Didik</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="
           bg-white rounded-xl p-10 mt-5 gap-8  grid grid-cols-2 justify-center items-center">
            <FormField
              control={form.control}
              name="namawali"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="nama lengkap" className='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  
            <FormField
              control={form.control}
              name="pekerjaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pekerjaan</FormLabel>
                  <FormControl>
                    <Input placeholder="pekerjaan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon Wali</FormLabel>
                  <FormControl>
                    <Input type='number' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                    placeholder="nomor telepon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder="alamat" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <Button className='bg-yellow-400 col-span-2 border-2 border-black hover:bg-white hover:border-yellow-400 text-black ' type="submit">Submit</Button>
          </form>
              <p className='flex gap-2 text-center '>Already have account? 
                  <Link to={'/login'}>
                      <button className='font-bold underline'>Sign In</button>
                  </Link>
              </p>
        </Form>
    </div>
  )
}

export default RegisterWali