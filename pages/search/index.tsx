import { Header, SearchSidebar, RestaurantCard } from "./components";
import Head from "./head";

export default function Search () {
  return (
    <>
      <Head />
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}