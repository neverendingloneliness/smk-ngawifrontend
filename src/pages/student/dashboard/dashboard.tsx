import SidebarStudent from '@/components/layout/student/Sidebar'
import Sidebar from '@/components/layout/student/Sidebar'
import { useUserQuery } from '@/store/slices/auht.service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const DashboardStudent = ({}) => {
  const { data } = useUserQuery()
  const [ SaveUser, setSaveUser ] = useState(() => {
      const storedUser = localStorage.getItem('user')
      return storedUser ? JSON.parse(storedUser) : null

  })

  useEffect(() => {
    if(data?.data){
        localStorage.setItem('user', JSON.stringify(data.data))
        setSaveUser(data.data)
    }
  },[data])

  const user = SaveUser

  
  return (
    <div className='flex'>
        <div className='hidden lg:block w-[18%] '>
            <SidebarStudent  />
        </div>
        <div className='flex-grow p-6'>
            <h1 className='text-2xl font-bold'>Welcome to SMK Ngawi {user?.nama_lengkap} !</h1>
        </div> 
    </div>
  )
}

export default DashboardStudent