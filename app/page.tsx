import Image from "next/image"

export default function Home() {
  return (
    <main className="flex justify-center">
      <nav className="fixed w-full max-w-[1280px] px-10 flex justify-between h-16 items-center backdrop-blur bg-white/30 ">
        <div className="flex gap-8">
          <button className="text-sm">inicio</button>
          <button className="text-sm">trabalhos</button>
          <button className="text-sm">contato</button>
        </div>
        <button className="px-4 py-1 text-lg rounded-full font-bold text-white bg-gradient-to-l from-red-400 via-indigo-500 to-blue-500">
          📆 Agendar reunião
        </button>
      </nav>
      <div className='container flex flex-col gap-20 max-w-[1200px]'>

        <div className="flex flex-col gap-20 pt-32">

          <section className="w-full">
            <h1 className='font-bold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-400 via-indigo-500 to-blue-400'>
              Oi, eu sou a Bia<span className="text-black">👋</span> 
            </h1>
            <p className="text-4xl">Ajudo empresas a se <span className='font-bold'>destacarem</span> no mundo digital.</p>
          </section>

          <section className="h-[650px]">

            <div className="flex flex-col bg-gray-100 rounded-lg px-10 pt-8 pb-20 w-80 h-full">
              <div className="flex flex-col items-center gap-2">
                <Image className="rounded-full" src="/../public/bia_foto.png" alt="Foto da bia sorrindo com um fundo laranja" width={100} height={100}/>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold">Bia Prada</p>
                  <p className="text-gray-500">Freelance Designer</p>
                </div>
                <div className='flex gap-2 items-center rounded-full px-2 py-1 bg-green-100 border border-green-500'>
                  <div className='rounded-full bg-green-500 w-2 h-2'></div>
                  <p className="text-xs text-green-500">Disponível</p>
                </div>
              </div>
              <div className="flex flex-col h-full text-xl justify-center text-gray-500">
                <p>Soluciono problemas de negócios através de planejamento, análises e desenvolvimento visual com o foco em simplicidade, sofisticação e eficiência.</p>
              </div>
            </div>

          </section>
          <section className=""></section>
          <section className=""></section>

        </div>

      </div>
    </main>
  )
}
