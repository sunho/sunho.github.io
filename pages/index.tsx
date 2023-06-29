import Link from 'next/link'
import Image from 'next/image'

import { GoLink } from "react-icons/go";
import { AiOutlineYoutube, AiFillYoutube } from 'react-icons/ai'
import { TbTrident } from "react-icons/tb";

export default function Home() {
  const shader_names = ["water", "cloudy4", "spider_web"]
  const shadres = shader_names.map(x => ({
    img: `/shaders/${x}.png`,
    name: x
  }))
  const projects = [
    {
      image: '/projects/llvm.png',
      title: "LLVM Compiler Infrastructure",
      desc: "LLVM is a compiler framework used by rust, swift, clang, etc. I have major contributions to core JIT infrastructure of LLVM.",
      link: "https://github.com/llvm/llvm-project/commits?author=sunho"
    },
    {
      image: '/projects/vita3k.svg',
      title: "Vita3K",
      desc: "Vita3K is Open Source Playstation Vita Emulator. I'm one of core maintainers working on GPU/CPU/kernel emulation. ",
      link: "https://github.com/Vita3K/Vita3K/commits?author=sunho"
    },
    {
      image: '/projects/spectral.jpg',
      title: "GPUSpectral",
      desc: "Vulkan monte-carlo ray-tracing renderer built from scratch.",
      link: "https://github.com/sunho/GPUSpectral"
    },
    {
      image: '/projects/katoml.png',
      title: "KatoML",
      desc: "Machine learning framework built from scratch.",
      link: "https://github.com/sunho/KatoML"
    },
    {
      image: '/projects/aheui.png',
      title: "AheuiJIT",
      desc: "JIT compiler for Aheui language built from scratch.",
      link: "https://github.com/sunho/AheuiJIT.git"
    }
  ]
  const talks = [
    {
      title: 'Building Programming Language Infrastructure With LLVM Components',
      place: '2023 ACM SIGPLAN Conference on PLDI',
      link: 'https://pldi23.sigplan.org/details/pldi-2023-tutorials/2/Building-Programming-Language-Infrastructure-With-LLVM-Components',
      youtube: false,
    },
    {
      title: 'JITLink: Native Windows JITing in LLVM',
      place: '2022 LLVM Developer\'s Meeting',
      link: 'https://www.youtube.com/watch?v=UwHgCqQ2DDA',
      youtube: true,
    }
  ]
  return (
    <>
      <div className="text-2xl font-bold">
      CS Undergrad @ UCSD <Image width={25} height={25} src="/trident.png" className="inline-block mb-2"/>
      </div>
      <div className="mt-5 text-2xl">
        GLSL Shaders
      </div>
      <div className="">{
        shadres.map(x => (
          <Link href={`/shaders/${x.name}`}>
            <div className="inline-block h-40 w-60 m-2">
              <div className="relative h-full -z-10">
                <Image
                    src={x.img}
                    // fill={true}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
              </div>
            </div>
          </Link>
        ))
      }
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="text-2xl inline-block">
        Projects
        </div>
      
      </div>
      {
        projects.map(x => (
            <div className="mx-3 mb-2">
              <div className="flex items-center">
              <div className="flex-shrink-0 inline-block h-[80px] w-[80px]">
                  <div className="relative h-full -z-10">
                    <Image
                        src={x.image}
                        // fill={true}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
              </div>
              <div className="pl-3 mb-5">
                <a href={x.link}>
                  <p className="underline font-bold">
                    <span>
                    {x.title}
                    </span>
                    
                  </p>
                </a>

                <p>
                  {x.desc}
                </p>
              </div>
            </div>
            </div>

        ))
      }
      {/* <div className="inline-block text-1xl ml-3 underline">more</div> */}
      <div className="text-2xl mt-5">
        Talks
      </div>
      {
        talks.map(x => (
          <div className="ml-2 mt-1">
              <a href={x.link}>
              <span className="font-bold underline">
              {x.title}
              </span>
              </a>
              {
                x.youtube ? (<AiFillYoutube className="ml-1   mb-[2px]  inline-block"/>) : (<GoLink className="ml-1 inline-block"/>)
              }
              
              <span>
              {" "}
              •
              {" "}
              </span>
              <span>
              {x.place}
            </span>
          </div>
        ))
      } 
      <div className="text-2xl mt-5">
        Algorithms
      </div>
      <a href="https://codeforces.com/profile/sunho">
        <div className="text-blue-600 border-2 rounded-lg border-blue-600 font-bold p-1 m-2 inline-block">
          expert @ codeforces
        </div>
      </a>
      {/* <a href="https://atcoder.jp/users/sunho">
        <div className="text-blue-300 font-bold p-2 inline-block">
          sunho @ atcoder
        </div>
      </a> */}
      <a href="https://solved.ac/en/profile/sunho">
      <div className="text-green-400 border-2 rounded-lg border-green-400 font-bold p-1 m-2 inline-block">
          platinum II @ solved.ac
        </div>
      </a>
      <div className='h-40'></div>
  </>
  )
}
