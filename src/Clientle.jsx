import React from 'react'

import Abp from "./assets/clientele/abp.png";
import Amazon from "./assets/clientele/amazon.png";
import bbj from "./assets/clientele/bbj.png";
import cargo from "./assets/clientele/cargo.png";
import coach from "./assets/clientele/coach.png";
import danieli from "./assets/clientele/danieli.png";
import lee from "./assets/clientele/lee.png";
import mpbirla from "./assets/clientele/mpbirla.png";
import papermill from "./assets/clientele/papermill.png";
import Sail from "./assets/clientele/sail.png";
import sesa from "./assets/clientele/sesa.png";
import south from "./assets/clientele/south.png";
import vizag from "./assets/clientele/vizag.png";
import eastern from "./assets/clientele/eastern.png";


export default function Clientle() {
    const companies = [
        {
            image: Sail
        },
        {
            image: south
        },
        {
            image: bbj
        },
        {
            image: vizag
        },
        {
            image: Abp
        },
        {
            image: lee
        },
        {
            image: mpbirla
        },
        {
            image: Amazon
        },
        {
            image: cargo
        },
        {
            image: sesa
        },
        {
            image: coach
        },
        {
            image: danieli
        },
        // {
        //     image: papermill
        // },
        {
            image: eastern
        },
    ]
    return (
        <section className="bg-[#001856] pt-8 flex justify-center py-16 px-8">
            <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                <h1 className="max-w-2xl tracking-tight leading-none text-white mb-4 md:text-5xl xl:text-6xl sm:text-4xl font-extrabold uppercase font-face-incf">
                    Our<span className="text-gbltsorange"> Clientele </span>
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-[30px] mt-16">
                    {
                        companies.map((item, index) => {
                            return (
                                <div key={index} className=" w-72 h-32">
                                    <img
                                        src={item.image}
                                        alt='image'
                                        loading="lazy"
                                        className=""
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
