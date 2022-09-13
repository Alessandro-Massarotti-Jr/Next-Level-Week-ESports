import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react";
import logoImg from './assets/logo-nlw-esports.svg';


function App() {
   return (
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
         <img src={logoImg} alt="logo NLW ESports" />
         <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlwGradient text-transparent bg-clip-text">duo</span> esta aqui.</h1>
         <div className="grid grid-cols-6 gap-6 mt-16">
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
            <a className="relative rounded-lg overflow-hidden" href="">
               <img src="/game.png" alt="" />
               <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
                  <strong className="font-bold text-white block">Fortinite</strong>
                  <span className="text-zinc-300 text-sm block">4 anúncios</span>
               </div>
            </a>
         </div>
         <div className="pt-1 bg-nlwGradient self-stretch rounded-lg mt-8">
            <div className="bg-[#2A2634] px-8 py-6 rounded-b-lg flex justify-between items-center">
               <div>
                  <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                  <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
               </div>
               <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white rounded">
                  <MagnifyingGlassPlus size={25}/> 
                  Publicar anúncio
               </button>
            </div>
         </div>
      </div>
   );
}

export default App
