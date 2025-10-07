function MyCars() {
  const cars = [
    {id: 101, name: 'Ford'},
    {id: 102, name: 'BMW'},
    {id: 103, name: 'Audi'}
  ];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li key={car.id}>I am a { car.name }</li>)}
      </ul>
    </>
  );
}
export default MyCars;