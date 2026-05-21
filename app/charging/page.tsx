import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-white min-h-screen shadow-2xl shadow-gray-800 drop-shadow-lg rounded-lg ">

            <div>
                <Navbar />
            </div>

            <div className="flex items-center ">
                <div className="flex flex-wrap justify-around gap-10 pr-20 pl-20 pt-20">
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Charging.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50">Charging</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Home-Charging.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50 text-center">Home Charging</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Supercharging-NA.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50 text-center">Supercharging</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Charging-for-Business.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50 text-center">Charging for Business</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Supercharger-For-Business.png" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50 text-center">Supercharger for Business</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                    <div className="text-center pb-20 rounded-lg">
                        <img className="w-55" src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto,w_220,c_scale/dpr_2.0/Mega-Menu-Charging-Semi-Charging-For-Business.jpg" alt="" />
                        <h1 className="font-bold font-mono text-black text-xl w-50 text-center">Semi Charging for Business</h1>
                        <div className="flex gap-4 text-center  justify-center">
                            <h1 className="text-gray-500 underline underline-gray-500">Learn</h1>
                            <h1 className="text-gray-500 underline underline-gray-500">Order</h1>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 pl-10 pr-20 pb-30">
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
                    </div>
                    <div className="text-gray-700  w-full underline-gray-700 hover:underine">
                        <h1>Help Me Charge</h1>
                        <h1>Charging Calculator</h1>
                        <h1>Charging With NACS</h1>
                        <h1>Supercharger Voting</h1>
                        <h1>Host a Supercharger</h1>
                    </div>
                </div>
            </div>

            <div className="bg-gray-300">
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <h1 className="text-gray-300">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
            </div>

        </div>
    )
}
