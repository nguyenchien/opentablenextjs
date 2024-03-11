import Link from "next/link";
import { Header, Menu, RestaurantNavBar } from "../components";
import Head from './head'

export default function RestaurantMenu() {
  return (
      <>
        <Head/>
        <Header/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Menu />
          </div>
        </div>
      </>
  )
}