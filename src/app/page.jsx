import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendationsAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendationsAnime = reproduce(recommendationsAnime, 4)

  return (
    <>
      <section>
        {/* HEADER */}
        <Header title="Anime Terpopuler" linkHref="/populer" linkTitle="Lihat Semua" />
        {/* LIST ANIME POPULER */}
        <AnimeList api={topAnime} />
      </section>
      <section>

        {/* HEADER */}
        <Header title="Rekomendasi" />
        {/* LIST REKOMENDASI ANIME */}
        <AnimeList api={recommendationsAnime} />
      </section>
    </>
  )
}

export default Page