'use client'
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
