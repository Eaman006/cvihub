import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 p-2">
      <div className="flex">
        <div className="m-2 p-2">
          <div className="flex gap-2 text-white"><div className="text-3xl">Welcome to </div><div className="text-3xl text-purple-500 font-bold">Cloud Vm Installation Hub</div></div>
          <div>Confused with Cloud Vm commands </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button className="bg-gradient-to-t bg-purple-700 to-purple-500 text-lg p-2 rounded-xl cursor-pointer hover:bg-purple-900 hover:active:bg-purple-400">Get Started</button>
        <button className="border border-white p-2 rounded-xl cursor-pointer hover:bg-gray-700">Guide by Topics</button>
      </div>  
                  
    </div>
  );
}
