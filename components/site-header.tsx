"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams() // make it so search params remain in search bar upon page reload
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') ?? "" // if nothign search, just use empty string

  if (pathname.startsWith('/studio')) {
    return null
  }

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) { // user submits search, go to that page w those params
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get("search")
    router.replace(`/?search=${searchQuery}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Rechercher des produits..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">¨Panier</span>
            </Button>
          </Link>
          <ThemeToggle />
          {/* Only want us as developers to be able to access the studio portion of our webpage */}
          {process.env.NODE_ENV === 'development' && (
            <Link href='/studio'>
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5"/>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
