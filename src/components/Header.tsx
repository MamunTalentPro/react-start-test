
import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useModifiedData from "@/hooks/useModifiedData";

export const Header = () => {
    const apiUrl =
        'https://bestinbd.com/projects/web/task/api/get-req-data/sections?type=slug&value=home&get_section=yes&image=yes&post=yes&file=yes&gallery=yes';

    const { modifiedData, loading, error } = useModifiedData(apiUrl);

    const onChange = (index: number) => {
        console.log(`Carousel slide changed to index ${index}`);
    };

    const onClickItem = (index: number) => {
        console.log(`Clicked on item with index ${index}`);
    };

    const onClickThumb = (index: number) => {
        console.log(`Clicked on thumbnail with index ${index}`);
    };
    return <div className="w-full flex bg-white">
        <div className="ml-10 mt-20 w-4/12">
            <p className="uppercase">INDULGE IN</p>
            <p className="uppercase"> DECADENCE</p>
            <p className="text-slate-400 mt-10">Project 4</p>
            <p className="text-bold">Historical,Place 4</p>
        </div>
        <div className="w-6/12">
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                {modifiedData?.map((imageUrl, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={imageUrl} alt={`Image ${index + 1}`} className="w-4/12 h-[200px]" />

                    </div>
                ))}
            </Carousel>
        </div>

    </div>

}