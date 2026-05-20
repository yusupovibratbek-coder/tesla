import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";


export default function Home() {
    return (
        <div className="bg-white min-h-screen h-full">

            <div>
                <Navbar />
            </div>

            <div>
                <div className="relative">
                    <img className="absolute object-cover" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Model-3-Desktop-US-CA-MX.jpg" alt="" />
                    <div className="relative z-10 pt-15">
                        <h1 className="text-5xl font-bold text-white text-center">Model 3</h1>
                        <h1 className="text-xl font-semibold text-white text-center pt-2">One year of the Supercharging included¹</h1>
                    </div>
                    <div className="relative z-10 flex gap-2 justify-center pt-8">
                        <Link href={'/'}><h1 className="bg-blue-600 hover:bg-blue-700 w-50 font-bold text-center text-gray-100 rounded-lg p-2">Order Now</h1></Link>
                        <Link href={'/'}><h1 className="bg-gray-100 hover:bg-gray-300 w-50 font-bold text-center text-gray-800 rounded-lg p-2">Learn More</h1></Link>
                    </div>
                </div>
            </div>

            <div>
                <Hero />
            </div>

            <div>
                <Models />
            </div>

            <div className="flex gap-4 pl-5 pt-10 pb-10">
                <div className=" bg-gray-200 flex w-150 items-center rounded-lg pb-5 pl-3">
                    <div>
                        <h1 className="text-3xl font-bold font-mono text-black pl-4 pt-4">Current Offers</h1>
                        <h1 className="text-xl text-gray-500 font-mono pl-4 w-100 pt-2">Explore limited-time offers on Tesla vehicles.</h1>
                        <div className="pl-4 pt-5">
                            <button className="bg-white hover:bg-black hover:text-white text-black font-bold w-40 pl-4 text-center  p-2 rounded-lg">Order Now</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-40" src="https://pngpix.com/images/hd/transparent-tesla-cybertruck-model-png-tub62-sdd34yxabclq7ebt.jpg" alt="" />
                    </div>
                </div>
                <div className="bg-gray-200 flex items-center w-150 rounded-lg">
                    <div>
                        <h1 className="text-3xl font-bold font-mono text-black pl-4 pt-4">Current Offers</h1>
                        <h1 className="text-xl text-gray-500 font-mono pl-4 w-100 pt-2">Explore limited-time offers on Tesla vehicles.</h1>
                        <div className="pl-4 pt-5">
                            <button className="bg-white hover:bg-black hover:text-white text-black font-bold w-40 pl-4 text-center  p-2 rounded-lg">Order Now</button>
                        </div>
                    </div>
                    <div>
                        <img className="w-40" src="https://platform.cstatic-images.com/in/v2/stock_photos/34be582e-bdd2-407e-8abc-13da0e2e7a91/9bc22f7d-f015-435e-8494-3fbd0d862af3.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}