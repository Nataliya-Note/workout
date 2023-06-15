export default function TableRow(props) {
    const {
      id,
      date,
      distance,
      onDeleteClick: handleDeleteClick,
      onEditClick: handleEditClick,
    } = props;
  
    return (
      <tr className="tableRow" id={id}>
        <td>{date}</td>
        <td>{distance}</td>
        <td>
          <a
            className="tableRow-control__edit"
            href="#0"
            onClick={handleEditClick}
          >
            &#9998;
          </a>
          <a
            className="tableRow-control__delete"
            href="#0"
            onClick={handleDeleteClick}
          >
            &#10008;
          </a>
        </td>
      </tr>
    );
  }