interface Props {
  itemText: String;
}

const ListItems = ({ itemText }: Props) => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id="firstCheckbox"
        />
        <label className="form-check-label">{itemText}</label>
      </li>
    </ul>
  );
};

export default ListItems;
