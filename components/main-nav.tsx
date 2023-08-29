import Link from "next/link"

import { siteConfig } from "@/config/site"
import Image from "next/image"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width="35"
          height="35"
        />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}