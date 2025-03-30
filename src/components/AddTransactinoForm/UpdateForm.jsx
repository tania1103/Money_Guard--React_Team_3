import { useState, useEffect } from 'react';

const UpdateForm = ({ transaction, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    category: '',
    comment: '',
    sum: '',
  });

  useEffect(() => {
    if (transaction) {
      setFormData(transaction);
    }
  }, [transaction]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'sum' ? Number(value) : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Type:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Comment:
        <input
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>
      <label>
        Sum:
        <input
          type="number"
          name="sum"
          value={formData.sum}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UpdateForm;
