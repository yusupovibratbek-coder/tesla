import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <div className="relative">
                    <img className="absolute object-cover" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Model-3-Desktop-US-CA-MX.jpg" alt="" />
                    <div className="relative z-10 pt-15">
                        <h1 className="text-5xl font-bold text-white text-center">Model 3</h1>
                        <h1 className="text-xl font-semibold text-white text-center">One year of the Supercharging included¹</h1>
                    </div>
                    <div className="relative z-10 flex gap-2 justify-center pt-5">
                        <Link href={'/'}><h1 className="bg-blue-500 hover:bg-blue-600 w-50 text-lg font-bold font-mono text-center text-white rounded-lg p-1">Order Now</h1></Link>
                        <Link href={'/'}><h1 className="bg-gray-100 hover:bg-gray-200 w-50 text-lg font-bold font-mono text-center text-gray-800 rounded-lg p-1">Learn More</h1></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}