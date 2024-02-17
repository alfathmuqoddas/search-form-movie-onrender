import Card from './Card';

export default function SeriesCard({ seriesData }) {
  return (
    <>
      <h3 className="mb-4">TV Results</h3>
      {seriesData.length > 0 ? (
        seriesData.map((seriesDat) => {
          const {
            id,
            name,
            first_air_date,
            overview,
            vote_average,
            poster_path,
          } = seriesDat;
          return (
            <Card
              key={id}
              title={name}
              year={first_air_date.slice(0, 4)}
              poster={
                poster_path
                  ? `https://image.tmdb.org/t/p/w185/${poster_path}`
                  : 'https://placehold.co/185x278?text=Data+Unavailable'
              }
              overviewPart={
                overview.length > 300
                  ? overview.slice(0, 300) + '...'
                  : overview
              }
              //btnRender={renderAddToFavoriteButton(seriesDat)}
              rating={Math.round(vote_average * 10)}
            />
          );
        })
      ) : (
        <>No Result</>
      )}
    </>
  );
}
