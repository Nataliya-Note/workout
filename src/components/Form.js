export default function Form(props) {
    const {
      onSubmit: handleFormSubmit,
      onChange: handleInputChange,
      form,
    } = props;
  
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(form);
        }}
      >
        <div className="form-control">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input
            className="form-control__date"
            type="date"
            id="date"
            name="date"
            required
            value={form.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="distance">Пройдено (км.)</label>
          <input
            className="form-control__distance"
            type="number"
            id="distance"
            name="distance"
            min="0"
            max="100"
            required
            value={form.distance}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="form-control__button-ok"
          type="submit"
        >
          OK
        </button>
      </form>
    );
  }