import Link from "next/link";
import React from "react";

export default function Navber() {
  return (
    <div className="w-[900px] mx-auto mt-2 bg-slate-900 rounded-lg flex justify-between py-5 px-8">
      <Link className="cursor-pointer" href="/">
        <h1 className="text-white text-2xl font-bold">
          Todu <span className="text-rose-400">App</span>.
        </h1>
      </Link>
      <Link href="/add">
        <button className="text-white border rounded px-3 hover:bg-white hover:text-black font-medium transition-all">
          Add Todu
        </button>
      </Link>
    </div>
  );
}
