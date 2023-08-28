import { NextResponse } from "next/server"
// @ts-ignore
import { validateCartItems } from "use-shopping-cart/utilities"

import { inventory } from "@/config/inventory"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) { // send cart details to endpoint
    const cartDetails = await request.json()
    // validate data thats been sent, reject if different from official inventory
    const lineItems = validateCartItems(inventory, cartDetails)
    const origin = request.headers.get('origin')
    const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ['card'],
        line_items: lineItems,
        shipping_address_collection: {
            allowed_countries: ['FR']
        },
        shipping_options: [
            {
                shipping_rate: "shr_1Nk8pYDqGoOgnlx9YouW7p6s" // key generated from stripe shipping rates dash
            }
        ],
        billing_address_collection: "auto",
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`, // tell stripe included session id of created session, get info about purchase
        cancel_url: `${origin}/cart` // if user exits checkout page
    })
    return NextResponse.json(session)
}
