import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async () => {

    const user = await authUserSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email }
    })

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                        <Link key={index} href="/anime/${collect.anime_mal_id}" className="relative">
                            <Image className="w-full" src={collect.anime_image} alt={collect.anime_image} width={350} height={350}></Image>
                            <div className="absolute bottom-0 w-full bg-color-accent h-16 flex items-center justify-center">
                                <h5 className="text-xl text-center">{collect.anime_title}</h5>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </section>
    )
}

export default Page