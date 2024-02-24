import Link from "next/link";
import { NavBar } from "../components";
import { Header, SearchSidebar, RestaurantCard } from "./components";

export default function Search () {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        {/* HEADER */}
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSidebar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  )
}