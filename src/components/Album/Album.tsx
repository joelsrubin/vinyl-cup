export function Album({ data }: { data: Release }) {
  return (
    <div className="card">
      {data.basic_information.artists.map((_, i) => (
        <div key={i}>
          <h4>{data.basic_information.title}</h4>
          <img src={data.basic_information.thumb} height={100} width={100} />
        </div>
      ))}
    </div>
  );
}
