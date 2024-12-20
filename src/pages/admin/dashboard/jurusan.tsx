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
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default JurusanAdmin