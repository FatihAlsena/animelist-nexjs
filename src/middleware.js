// BERFUNGSI UNTUK MEMPROTEKSI URL DARI PENGGUNA TIDAK TERDAFTAR

export { default } from "next-auth/middleware"

export const config = { matcher: ["/users/:path*"] }