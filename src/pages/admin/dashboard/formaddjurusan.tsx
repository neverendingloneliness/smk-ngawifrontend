import SidebarAdmin from '@/components/layout/admin/Sidebar'
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
    jurusan: z.string().min(2, {
      message: "Nama Wali must be at least 2 characters.",
    }),
    deskripsiJurusan: z.string().min(2, {
        message: "Nama Wali must be at least 2 characters.",
      }),
    
  })


const FormAddJurusan = () => {
    const form = useForm<z.infer<typeof formSchema>>({
                  resolver: zodResolver(formSchema),
                  defaultValues: {
                    jurusan: "",
                    deskripsiJurusan:"",
                    
                  },
                })
          
        function onSubmit(values: z.infer<typeof formSchema>) {
          console.log(values)
        }

return (
    <div className='flex'>
        <div className='hidden lg:block w-[18%] '>
            <SidebarAdmin  />
        </div>

        <div className='flex flex-col justify-center items-center mt-10 w-full h-full '>
        <h1 className='text-2xl font-bold '>Tambah <span className='text-yellow-400'>Jurusan</span>  </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="
           bg-white rounded-xl p-10 mt-5 gap-8  grid grid-cols-2 justify-center items-center">
            <FormField
              control={form.control}
              name="jurusan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="jurusan" className='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  


            <FormField
              control={form.control}
              name="deskripsiJurusan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="deksripsi jurusan" className='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  
          
              <Button className='bg-yellow-400 col-span-2 border-2 border-black hover:bg-white hover:border-yellow-400 text-black ' type="submit">Submit</Button>
          </form>
        </Form>
    </div>
    </div>
  )
}

export default FormAddJurusan