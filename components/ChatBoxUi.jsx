import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SvgIconInfo, SvgIconSettings, SvgIconSend } from "./SvgIcons/SvgIcons";
const ChatBoxUi = () => {

  const router = useRouter();

  const path = (pathname) => {
    router.push(pathname);
  }

  return (
    <div className="bg-zinc-50 h-[100vh] w-[50%] fixed right-16 bottom-20 rounded-md p-2 shadow-lg max-h-[17rem] overflow-y-scroll">
      <nav className="flex justify-center fixed z-50 h-10 items-center bg-slate-100 w-[49%] rounded-full shadow-md">
        <div className="text-zinc-700">
          <p>Talk to us!</p>
        </div>

        <ul className="list-none flex px-10 gap-10">
          <li className="text-zinc-700 cursor-pointer tooltip tooltip-top active:scale-[75%] transition-all" data-tip="Info"><SvgIconInfo /></li>
          <li className="text-zinc-700 cursor-pointer tooltip tooltip-top active:scale-[75%] transition-all" data-tip="Settings"><SvgIconSettings /></li>
        </ul>
      </nav>
      <div className="flex flex-col w-[100%] mt-[3rem] max-h-[10rem] overflow-y-scroll">

      <div className="chat chat-start">

        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Tailwind CSS chat bubble component" src="https://cdn-images.imagevenue.com/2a/43/92/ME18FB6H_o.jpeg" height={100} width={100}/>
          </div>
        </div>

        <div className="chat-header text-zinc-400">
          Admin init
          <time className="text-xs opacity-75 px-3">12:45</time>
        </div>
        <div className="chat-bubble bg-slate-100 text-zinc-600">You were the Chosen One! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nemo iusto qui animi aut, praesentium error, quod vel consequatur deserunt architecto cum ullam magnam fuga libero inventore tempora impedit quisquam?</div>
        <div className="chat-footer opacity-50 text-green-500">
          Delivered
        </div>
      </div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Tailwind CSS chat bubble component" src="https://cdn-images.imagevenue.com/2a/43/92/ME18FB6H_o.jpeg" height={100} width={100}/>
          </div>
        </div>

        <div className="chat-header text-zinc-400">
          My name
          <time className="text-xs opacity-75 px-3">12:46</time>
        </div>
        <div className="chat-bubble bg-slate-100 text-zinc-600">Ohk I understand but why is does the earth seem to flat?</div>
        <div className="chat-footer text-zinc-400">
          Seen at 12:46
        </div>

      </div>


        {/* <button className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">write</button>

        <button onClick={() => path('/dashboard')} className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">Dashboard</button>

        <button className="btn w-[100%] my-3 border border-blue-400 shadow-md text-blue-400 hover:bg-transparent">My Book</button> */}

      </div>
        <div className="h-10 flex justify-start items-center mt-2 fixed w-[49%] border border-t-gray-400 border-l-0 border-r-0 border-b-0">
          <input type="text" className="bg-white border px-5 w-[70%] rounded-full mt-2" placeholder="Send a message"/>
          <button className="mt-2 mx-10 active:scale-[75%] transition-all"><SvgIconSend /></button>
        </div>

    </div>
  )
}

export default ChatBoxUi;
