import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useGitGifs } from "../hooks/useGitGifs";

export const GiftGrid = ({ category }) => {

    const { data: images, load } = useGitGifs(category);
    return (
        <>
            {load && <span>Loading</span>}
            
            <h2>{category}</h2>
            <div className="card-grid">
                {images.map((img) => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
        </>
    );
};
