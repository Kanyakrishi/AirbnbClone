import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import Footer from "@/components/Footer";
import exploreData from "app/exploreData.json";
import liveAnywhereData from "app/liveAnywhereData.json";
import LargeCard from "@/components/LargeCard";

export default function Home() {
  return (
    <div className="">
      <head>
        <title>Airbnb</title>
      </head>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <p className="font-semibold text-2xl pb-5">Explore Nearby</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-8 text-2xl font-semibold">Live Anywhere</h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData.map((item) => (
              <MediumCard key={item.img} data={item} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The greatest outdoors"
          description="Wishlists curated by KANYA!"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}