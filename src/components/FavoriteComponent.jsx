export default function FavoriteComponent({ favData }) {
  return (
    <>
      Favorites:
      <ul>
        {favData.map((fav, index) => {
          const { title, name, release_date, first_air_date, id } = fav;
          return (
            <li key={index}>
              {title ? title : name}(
              {release_date
                ? release_date.slice(0, 4)
                : first_air_date.slice(0, 4)}
              ), {id}
            </li>
          );
        })}
      </ul>
    </>
  );
}
