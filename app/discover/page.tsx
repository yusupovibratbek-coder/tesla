import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="bg-white min-h-screen shadow-2xl shadow-gray-800 drop-shadow-lg rounded-lg ">

            <div>
                <Navbar />
            </div>

            <div className="flex justify-around pt-30 pl-60 pr-60">
                <div className="">
                    <h1 className="text-gray-500 font-bold font-serif pt-4">Resources</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Demo Drive</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Insurance</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Current Offers</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Learn</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Video Guides</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Customer Stories</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Events</h1>
                    <h1 className="text-black font-bold font-serif pt-2 pb-30">Safety</h1>
                </div>
                <div>
                    <h1 className="text-gray-500 font-bold font-serif pt-4">Location Services</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Find Us</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Find a Collision Center</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Find a Certified Installer</h1>
                </div>
                <div>
                    <h1 className="text-gray-500 font-bold font-serif pt-4">Company</h1>
                    <h1 className="text-black font-bold font-serif pt-2">About Us</h1>
                    <h1 className="text-black font-bold font-serif pt-2">Careers</h1>
                    <h1 className="text-black font-bold font-serif pt-2 ">Investor Relations</h1>
                </div>
            </div>

             <div className="bg-gray-300">
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