export interface User {
    data: {
      id: number
      name: string
      email: string
      email_verified_at: string | null
      nama_lengkap: string
      nomor_telepon: string
      tanggal_lahir: string
      jenis_kelamin: string
      asal_sekolah: string
      jurusan_id: number
      alamat: string; 
      role: "admin" | "student"; 
      created_at: string 
      updated_at: string 
      token: string 
    }
  }