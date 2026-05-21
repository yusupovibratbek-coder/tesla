import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-white min-h-screen shadow-2xl shadow-gray-800 drop-shadow-lg rounded-lg">

            <div>
                <Navbar />
            </div>

            <div className="flex ">
                <div className="flex flex-wrap justify-around gap- pr-20 pl-20 pt-20">
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Energy-Solar-Panels.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Solar Panels</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Energy-Solar-Roof.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Solar Roof</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Energy-Powerwall-US.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Powerwall</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center pb-20">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Energy-Megapack.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Megapack</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 pr-20 pt-30">
                    <div className="text-gray-700">
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                    </div>
                    <div className="text-gray-700  w-full underline-gray-700 hover:underine">
                        <h1>Schedule a Consultation</h1>
                        <h1>Why Solar</h1>
                        <h1>Incentives</h1>
                        <h1>Support</h1>
                        <h1>Partner with Tesla</h1>
                        <h1>Commercial</h1>
                        <h1>Utilities</h1> 
                    </div>
                </div>
            </div>

            <div className="bg-gray-300">
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            </div>

        </div>
    )
}