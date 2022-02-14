import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-stores.json";
import { FaLocationArrow } from "react-icons/fa";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic data
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

  return (
    <div className="relative">
      <Head>
        <title>{name}</title>
      </Head>
      <p className="absolute top-[40px] left-[270px] text-[20px]">
        Go back to Home
      </p>
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <div className="w-[500px] h-[500px] ">
          <Image
            src={imgUrl}
            width={500}
            height={500}
            objectFit="cover"
            alt={name}
          />
        </div>
        <div className="w-[500px] h-[500px] p-[20px] shadow-2xl">
          <h2 className="text-[32px] font-bold">{name}</h2>
          <p className="text-[18px] font-semibold mt-4">
            <span className="inline-block mr-4 text-[18px] -mb-1">
              <FaLocationArrow />
            </span>
            {address}
          </p>
          <button className="bg-purple-600 py-2 px-4 rounded-md text-white mt-4">
            Up Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
