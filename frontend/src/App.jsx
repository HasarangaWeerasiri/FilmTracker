const watchlist = [
  { title: 'The Grand Budapest Hotel', year: '2014', genre: 'Comedy · Drama', rating: '4.8', color: 'from-rose-500 to-orange-300' },
  { title: 'Perfect Days', year: '2023', genre: 'Drama', rating: '4.6', color: 'from-sky-700 to-cyan-300' },
  { title: 'Dune: Part Two', year: '2024', genre: 'Sci-Fi · Adventure', rating: '4.7', color: 'from-amber-700 to-yellow-300' },
]

function FilmCard({ film }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:bg-white/[0.1]">
      <div className={`flex h-56 items-end bg-gradient-to-br ${film.color} p-5`}>
        <div>
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white/90">In watchlist</span>
          <h3 className="mt-3 max-w-52 text-xl font-semibold leading-tight text-white">{film.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 text-sm">
        <div>
          <p className="font-medium text-white/90">{film.year}</p>
          <p className="mt-1 text-white/50">{film.genre}</p>
        </div>
        <p className="flex items-center gap-1 font-medium text-amber-300">★ {film.rating}</p>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101013] text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between">
          <a className="text-xl font-bold tracking-tight" href="/">
            film<span className="text-amber-300">tracker</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
            <a className="text-white" href="#discover">Discover</a>
            <a href="#watchlist">My watchlist</a>
            <button className="rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:border-white/40">Sign in</button>
          </div>
          <button className="rounded-full border border-white/15 px-3 py-2 text-sm sm:hidden" aria-label="Open menu">Menu</button>
        </nav>

        <section className="relative py-24 sm:py-32">
          <div className="absolute -left-20 top-16 -z-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Your personal cinema journal</p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Every film has a story.
              <span className="block text-white/40">Keep yours.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Discover your next favorite, keep a record of what you watch, and share the films that stay with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-[#191714] transition hover:bg-amber-200">Start tracking</button>
              <button className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/80 transition hover:border-white/40">Explore films</button>
            </div>
          </div>
        </section>

        <section id="watchlist" className="pb-20">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm text-white/45">Curated for you</p>
              <h2 className="mt-1 text-2xl font-semibold">Your watchlist</h2>
            </div>
            <a className="text-sm text-amber-300 hover:text-amber-200" href="#discover">View all →</a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {watchlist.map((film) => <FilmCard key={film.title} film={film} />)}
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-sm text-white/40">
          Built for people who believe the best films are worth remembering.
        </footer>
      </div>
    </main>
  )
}
