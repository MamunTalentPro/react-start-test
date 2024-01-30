import { useFetchInformation } from "@/hooks/useFetchInformatino";
import { useEffect, useState } from "react";
import Image from "next/image";
import useModifiedData from "@/hooks/useModifiedData";
export const Footer = () => {
    const apiUrl =
    'https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes';

const { modifiedData, loading, error } = useModifiedData(apiUrl);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div className="bg-blue-900">
            <div className="carousel rounded-box">
                {modifiedData && modifiedData.map((info: string, index: number) => (

                    index !== 3 ?

                        <div className="carousel-item mx-5 w-50 h-96">
                            <img src={info} className="rounded-box" />
                        </div>

                        : <></>
                ))}

            </div>
        </div>





    );
}
