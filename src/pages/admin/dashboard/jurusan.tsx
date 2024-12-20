import SidebarAdmin from '@/components/layout/admin/Sidebar'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { CiCirclePlus } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JurusanAdmin = () => {
  return (
    <div className='flex'>
      <div className='hidden lg:block w-[18%] '>
            <SidebarAdmin  />
      </div>
        <div className='text-black w-full h-full gap-10 p-6 flex-col flex justify-center items-center '>
          <h1 className='text-3xl font-bold'>Jurusan</h1>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader >
              <Link to={'/admin/dashboard/addjurusan'}>
                <Button className='mb-8 bg-yellow-200 text-black hover:bg-black hover:text-white' >
                 <CiCirclePlus className='font-bold' />
                  Add jurusan
                </Button>
              </Link>
              <TableRow>
                <TableHead className="w-[100px]">jurusan</TableHead>
                <TableHead>deskripsi jurusan</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="items-end justify-end flex gap-5">
                  <Button className='bg-yellow-200 text-black hover:bg-black hover:text-white'>
                    <GrUpdate />
                    Update
                  </Button>
                  <Button className='bg-yellow-200 text-black hover:bg-black hover:text-white'>
                    <FaRegTrashAlt />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default JurusanAdmin