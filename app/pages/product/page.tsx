"use client";

import { CustomButton } from "@/components/index";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const FetchData: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchDummyData = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setData(response?.data);
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDummyData();
  }, []);

  console.log(data, "fetched data");
  return (
    <div>
      <CustomButton
        btnType="button"
        containerStyles="bg-green-500 p-2 rounded-md m-4"
        title="Show Fetched Data"
      />
      {data?.length > 0 ? (
        <div>
          <ul>
            {data?.map((item: any) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
      page to test product page
    </div>
  );
};

export default FetchData;
