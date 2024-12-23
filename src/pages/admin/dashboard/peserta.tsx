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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FormControl } from '@/components/ui/form'
 

const DataPeserta = () => {
  return (
    <div className='flex'>
      <div className='hidden lg:block w-[18%] '>
            <SidebarAdmin  />
      </div>
        <div className='text-black w-full h-full gap-10 p-6 flex-col flex justify-center items-center '>
          <h1 className='text-3xl font-bold'>Data Pendaftar</h1>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">peserta</TableHead>
                <TableHead>jurusan</TableHead>
                <TableHead>tanggal pendaftaran</TableHead>
                <TableHead>status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Engkok onk data e</TableCell>
                <TableCell>ENgkok ONK DATAE</TableCell>
                <TableCell>ENgkok ONK DATAE</TableCell>
                <TableCell>
                  ENgkok ONK DATAE
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
  )
}

export default DataPeserta