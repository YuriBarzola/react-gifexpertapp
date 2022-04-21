import React, { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GiftGrid } from "./componets/GiftGrid";

export const GiftExpertApp = () => {
    // const categoriesStore = localStorage.getItem('categories') != null ? JSON.parse(localStorage.getItem('categories')) : [];
    const [categories, setcategories] = useState(["Maluma"]);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />
            <AddCategory setcategories={setcategories} />

            {categories.map((e) => (
                <GiftGrid key={e} category={e} />
            ))}
        </>
    );
};
