import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Shader({
  link,
  previewImg
}: {
  link: string,
  previewImg: string
}) {
  const [isPreview, setPreview] = useState(true);
  return (
    isPreview ? (
      <div>
        <span className="font-medium">Click this if your device has a decent GPU: </span> <div className="p-1 ml-1 rounded-lg bg-green-400 text-white font-bold inline-block cursor-pointer" onClick={() => {setPreview(false)}}>Turn on WebGL</div>
        <video className="w-[640px] h-[360px]" autoPlay muted loop playsInline>
          <source src={previewImg} type="video/mp4"/>
        </video>
      </div>
    ) :
     (
      <iframe width="640" height="360" frameBorder="0" src={link} allowFullScreen={true}></iframe>
     )
  )
}
