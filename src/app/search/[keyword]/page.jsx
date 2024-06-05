import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)

    // MANGGIL API SEARCH
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <>
            <section>
                {/* HEADER */}
                <Header title={`Hasil Pencarian ${decodedKeyword}`} />
                {/* LIST HASIL ANIME YANG DISEARCH */}
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page