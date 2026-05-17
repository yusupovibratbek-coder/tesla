import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


export default function Home() {
    return (
        <div className="bg-white min-h-screen">

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
                        <Link href={'/'}><h1 className="bg-blue-500 hover:bg-blue-600 w-50 font-bold text-center text-gray-100 rounded-lg p-2">Order Now</h1></Link>
                        <Link href={'/'}><h1 className="bg-gray-100 hover:bg-gray-300 w-50 font-bold text-center text-gray-800 rounded-lg p-2">Learn More</h1></Link>
                    </div>
                </div>
            </div>

          <div>
            <Hero/>
          </div>

        </div>
    )
}