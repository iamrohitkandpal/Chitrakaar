import React, { useEffect, useState } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const RenderCards = ({ data, title }) => {
    if(data?.length > 0){
        return data.map((post) => <Card key={post._id} {...post}/>)
    }

    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
    )
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of visually stunning images created by
          community people
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-xl mb-3 text-[#666e75]">
                Search Results for <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                {searchText ? (
                    <RenderCards 
                        data={[]}
                        title="No Search Results Found"
                    />
                ) : (
                    <RenderCards
                        data={[]}
                        title="No Posts Found"
                    />
                )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
