import Card from '../assets/Card';

export default function MovieCard({ movieData }) {
  return (
    <div className="">
      <h3 className="mb-4">Movie Results</h3>
      {movieData.length > 0 ? (
        movieData.map((dat) => {
          const {
            id,
            title,
            release_date,
            poster_path,
            overview,
            vote_average,
          } = dat;
          return (
            <Card
              key={id}
              title={title}
              year={release_date.slice(0, 4)}
              poster={
                poster_path
                  ? `https://image.tmdb.org/t/p/w185/${poster_path}`
                  : 'https://placehold.co/185x278?text=Data+Unavailable'
              }
              overviewPart={
                overview.lenght > 300
                  ? overview.slice(0, 300) + '...'
                  : overview
              }
              rating={Math.round(vote_average * 10)}
            />
          );
        })
      ) : (
        <>No Result</>
      )}
    </div>
  );
}
