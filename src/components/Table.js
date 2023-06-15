import TableRow from './TableRow';
import getFormattedDate from '../getFormattedDate';

export default function Table(props) {
  const {
    workouts,
    onDeleteClick: handleDeleteClick,
    onEditClick: handleEditClick,
  } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено (км.)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => {
          return (
            <TableRow
              key={workout.id}
              id={workout.id}
              date={getFormattedDate(workout.date)}
              distance={workout.distance}
              onDeleteClick={handleDeleteClick}
              onEditClick={handleEditClick}
            />
          );
        })}
      </tbody>
    </table>
  );
}