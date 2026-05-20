import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-white min-h-screen shadow-2xl shadow-gray-800 drop-shadow-lg rounded-lg ">

            <div>
                <Navbar />
            </div>

            <div className="flex items-center ">
                <div className="flex flex-wrap justify-around gap- pr-20 pl-20 pt-20">
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Model-S-New-NA-TW-KR.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Model S</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Model-3-Performance-LHD.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Model 3</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Model-Y-2-v3.jpg" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Model Y</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Model-X-New.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Model X</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Cybertruck-1x.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Cybertruck</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center pb-20 rounded-lg">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Vehicles-Inventory-v3.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl">Inventory</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 pl-10 pr-20 pt-30">
                    <div className="text-gray-700">
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
                        <h1>|</h1>
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
                        <h1>Current Offers</h1>
                        <h1>Demo Drive</h1>
                        <h1>Trade-in</h1>
                        <h1>Vehicle Safety Report</h1>
                        <h1>Pre-Owned</h1>
                        <h1>Trip Planner</h1>
                        <h1>Features</h1>
                        <h1>Help Me Choose</h1>
                        <h1>Compare</h1>
                        <h1>Safety</h1>
                        <h1>Fleet</h1>
                        <h1>Semi</h1>
                        <h1>Roadster</h1>
                        <h1>Robotaxi</h1>
                    </div>
                </div>
            </div>

            <div className="bg-gray-300">
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            </div>

        </div>
    )
}