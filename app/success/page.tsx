import Link from "next/link"

import { stripe } from "@/lib/stripe"
import { CheckoutSession } from "@/components/checkout-session"

interface Props {
  searchParams: {
    session_id?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const sessionId = searchParams?.session_id ?? ""
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)
  const customerDetails = checkoutSession?.customer_details

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Checkout session */}
        <CheckoutSession customerDetails={customerDetails} />
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
            href="/" // Change this to the correct URL of your homepage
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Retour au menu
          </a>
          <a href={'mailto:sneakwaves@gmail.com?subject=question sur ma commande ?'} className="text-sm font-semibold">
          Contacter le support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  )
}
