import Link from "next/link";
import { useRouter } from "next/navigation";
const ChatBoxUi = () => {

  const router = useRouter();

  const path = (pathname) => {
    router.push(pathname);
  }

  return (
    <div className="bg-zinc-200 h-[15rem] w-[15rem] fixed right-16 bottom-20 rounded-md p-2 shadow-lg max-h-[15rem]">

      <div className="flex justify-center items-center flex-col">

        <button className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">write</button>

        <button onClick={() => path('/dashboard')} className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">Dashboard</button>

        <button className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">My Book</button>

      </div>

    </div>
  )
}

export default ChatBoxUi;
