import React from 'react';

const stats = [
	{ label: 'Films watched', value: '24' },
	{ label: 'Watchlist', value: '12' },
	{ label: 'Average rating', value: '4.2 / 5' },
];

const recentFilms = [
	{ title: 'The Grand Adventure', year: 2024, rating: 5 },
	{ title: 'Midnight Streets', year: 2023, rating: 4 },
	{ title: 'A Quiet Place', year: 2022, rating: 4 },
];

function ProductDashboard() {
	return (
		<main style={styles.page}>
			<section style={styles.header}>
				<div>
					<p style={styles.eyebrow}>FILM TRACKER</p>
					<h1 style={styles.title}>Welcome back</h1>
					<p style={styles.subtitle}>Keep track of your movie journey.</p>
				</div>
				<button style={styles.button} type="button">+ Add film</button>
			</section>

			<section style={styles.stats} aria-label="Film statistics">
				{stats.map((stat) => (
					<article key={stat.label} style={styles.card}>
						<span style={styles.statLabel}>{stat.label}</span>
						<strong style={styles.statValue}>{stat.value}</strong>
					</article>
				))}
			</section>

			<section style={styles.panel}>
				<div style={styles.panelHeader}>
					<h2 style={styles.heading}>Recently watched</h2>
					<button style={styles.link} type="button">View all</button>
				</div>
				<div>
					{recentFilms.map((film) => (
						<div key={film.title} style={styles.film}>
							<div style={styles.poster} aria-hidden="true">🎬</div>
							<div style={styles.filmInfo}>
								<strong>{film.title}</strong>
								<span style={styles.muted}>{film.year}</span>
							</div>
							<span style={styles.rating}>{'★'.repeat(film.rating)}</span>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

const styles = {
	page: {
		minHeight: '100vh',
		padding: '48px max(24px, 8vw)',
		boxSizing: 'border-box',
		background: '#f6f7fb',
		color: '#1f2937',
		fontFamily: 'Inter, Arial, sans-serif',
	},
	header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, marginBottom: 36 },
	eyebrow: { margin: 0, color: '#635bff', fontSize: 12, fontWeight: 700, letterSpacing: 2 },
	title: { margin: '8px 0 6px', fontSize: 34 },
	subtitle: { margin: 0, color: '#6b7280' },
	button: { border: 0, borderRadius: 8, padding: '12px 18px', background: '#635bff', color: '#fff', fontWeight: 700, cursor: 'pointer' },
	stats: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 28 },
	card: { padding: 22, borderRadius: 12, background: '#fff', boxShadow: '0 4px 18px rgba(31, 41, 55, .06)' },
	statLabel: { display: 'block', color: '#6b7280', fontSize: 14, marginBottom: 10 },
	statValue: { fontSize: 25 },
	panel: { maxWidth: 760, padding: 24, borderRadius: 12, background: '#fff', boxShadow: '0 4px 18px rgba(31, 41, 55, .06)' },
	panelHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
	heading: { margin: 0, fontSize: 20 },
	link: { border: 0, background: 'none', color: '#635bff', cursor: 'pointer', fontWeight: 600 },
	film: { display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: '1px solid #eef0f4' },
	poster: { display: 'grid', placeItems: 'center', width: 44, height: 56, borderRadius: 6, background: '#ede9fe', fontSize: 22 },
	filmInfo: { display: 'flex', flexDirection: 'column', gap: 5, flex: 1 },
	muted: { color: '#9ca3af', fontSize: 14 },
	rating: { color: '#f59e0b', letterSpacing: 2 },
};

export default ProductDashboard;
