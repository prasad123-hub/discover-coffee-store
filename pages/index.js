import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";

import coffeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeStores: coffeStoresData,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log("props", props);
  const handleBannerBtnOnClick = () => {
    console.log("hi banner button");
  };

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full md:w-[768px] lg:w-[1124px] mx-auto py-8">
        <Banner
          buttonText="View Stores Nearby"
          handleOnClick={handleBannerBtnOnClick}
        />
        {props.coffeStores.length > 0 && (
          <>
            <h2 className="mt-12 -mb-10 text-[24px] font-bold">
              Toronto Stores
            </h2>
            <div className="grid grid-cols-3">
              {props.coffeStores.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  imgUrl={item.imgUrl}
                  href={`/coffee-store/${item.id}`}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
