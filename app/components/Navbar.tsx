import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-12 bg-white shadow-md">
            <div className="flex justify-around">
                <div className="items-center p-2 pl-10">
                    <Link href={'/'}><h1 className="text-black font-bold font-serif text-2xl ">T E S L A</h1></Link>
                </div>
                <div className="flex bg-white gap-10 text-black font-bold font-mono items-center ">
                    <Link className="bg-white hover:bg-gray-200 w-25 p-1 text-center rounded-lg" href={'/vehicles'}>Vehicles</Link>
                    <Link className="bg-white hover:bg-gray-200 w-20 p-1 text-center rounded-lg" href={'/energy'}>Energy</Link>
                    <Link className="bg-white hover:bg-gray-200 w-25 p-1 text-center rounded-lg" href={'/charging'}>Charging</Link>
                    <Link className="bg-white hover:bg-gray-200 w-25 p-1 text-center rounded-lg" href={'/discover'}>Discover</Link>
                    <Link className="bg-white hover:bg-gray-200 w-18 p-1 text-center rounded-lg" href={'/shop'}>Shop</Link>
                </div>
                <div className="flex gap-5 items-center">
                    <Link href={'/'}>
                        <img className=" w-6 p-1 border-black border-1 rounded-4xl" src="https://cdn-icons-png.flaticon.com/512/348/348488.png" alt="" />
                    </Link>
                    <Link href={'/'}> <img className="w-8 pl-2" src="https://logodix.com/logo/862817.png" alt="" /></Link>
                    <Link href={'/'}><img className=" w-10 " src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}