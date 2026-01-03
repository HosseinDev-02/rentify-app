import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-20">
            <div className="grid grid-cols-4 gap-4 w-full h-full text-2xl *:flex *:items-center *:justify-center"></div>
        </div>
    );
}
