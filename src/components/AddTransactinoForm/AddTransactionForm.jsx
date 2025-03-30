import { useState } from 'react';
import {
  Modal,
  Box,
  Switch,
  Typography,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import backgroundImage from '../../images/noTransactions/add-transaction.jpg';
// import dropDownImage from '../../images/noTransactions/dr-down.jpg';
import './AddTransactionForm.module.css';
import { Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  sum: Yup.number()
    .typeError('Sum must be a number')
    .positive('Sum must be positive')
    .required('Sum is required'),
  date: Yup.string().required('Date is required'),
  category: Yup.string().when('transactionType', {
    is: 'Expense',
    then: Yup.string().required('Category is required'),
  }),
  comment: Yup.string().required('Comment is required'),
});

const AddTransactionForm = ({ open, onClose, onSubmit }) => {
  const [transactionType, setTransactionType] = useState('Expense');
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleToggleChange = event => {
    setTransactionType(event.target.checked ? 'Expense' : 'Income');
  };

  const formatDate = date => {
    try {
      return new Date(date).toLocaleDateString('en-GB');
    } catch (e) {
      return '';
    }
  };

  const parseDate = date => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-transaction-modal"
      aria-describedby="add-transaction-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: 24,
          borderRadius: 3,
          p: 4,
          width: 400,
          textAlign: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2
          id="add-transaction-modal"
          style={{ marginBottom: '25px', color: 'white' }}
        >
          Add Transaction
        </h2>

        {/* Formik Formular */}
        <Formik
          initialValues={{
            sum: '',
            date: null,
            category: '',
            comment: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            const formattedDate = values.date
              ? values.date.toLocaleDateString('en-GB') // formateaza în DD/MM/YYYY
              : null;
            const type = transactionType === 'Income' ? '+' : '-';
            onSubmit({ ...values, type });
            resetForm();
            onClose();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Switcher */}
              {console.log('Current date value:', values.date)}
              {/* Switch pentru Income/Expense cu text la stânga și dreapta */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  position: 'relative',
                }}
              >
                {/* Income la stanga */}
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 'bold',
                    marginRight: '15px',
                    color: transactionType === 'Income' ? 'orange' : 'white',
                  }}
                >
                  Income
                </Typography>

                <Switch
                  checked={transactionType === 'Expense'}
                  onChange={handleToggleChange}
                  color="default"
                  sx={{
                    width: 82,
                    height: 35,
                    padding: 0,
                    position: 'relative',
                    '& .MuiSwitch-switchBase': {
                      padding: 0,
                      '&.Mui-checked': {
                        transform: 'translateX(47px)',
                      },
                      '&:not(.Mui-checked)': {
                        transform: 'translateX(0px)',
                      },
                    },
                    '& .MuiSwitch-thumb': {
                      backgroundColor:
                        transactionType === 'Expense' ? 'red' : 'orange',
                      width: 35,
                      height: 35,
                      position: 'relative',
                      '&::before': {
                        content: transactionType === 'Expense' ? '"-"' : '"+"',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '29px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      },
                    },
                    '& .MuiSwitch-track': {
                      borderRadius: 25,
                      backgroundColor:
                        transactionType === 'Expense' ? 'white' : 'white',
                      opacity: 1,
                    },
                  }}
                />

                {/* Expense la dreapta */}
                <Typography
                  variant="body1"
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '15px',
                    color: transactionType === 'Expense' ? 'red' : 'white',
                  }}
                >
                  Expense
                </Typography>
              </div>

              {/* Category (pentru cheltuieli) */}
              {transactionType === 'Expense' && (
                <div style={{ marginBottom: '15px' }}>
                  <Field
                    as="select" // Dropdown menu
                    name="category"
                    style={{
                      width: '80%',
                      backgroundColor: `transparent`,
                      color: 'white',
                      padding: '10px',
                      border: 'none',
                      borderBottom: '1px solid #fff',
                      borderRadius: '1px',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  >
                    <option
                      value=""
                      disabled
                      style={{
                        color: hoveredOption === null ? 'white' : 'red',
                        backgroundColor: '#7445F5',
                      }}
                      onMouseEnter={() => setHoveredOption(null)}
                      onMouseLeave={() => setHoveredOption(null)}
                    >
                      Select a category
                    </option>
                    {[
                      'Main expenses',
                      'Products',
                      'Car',
                      'Self care',
                      'Child care',
                      'Household products',
                      'Education',
                      'Leisure',
                    ].map((category, index) => (
                      <option
                        key={index}
                        value={category}
                        // className="select-dropdown"
                        style={{
                          color: hoveredOption === category ? 'red' : 'white',
                          backgroundColor: '#7445F5',
                        }}
                        onMouseEnter={() => setHoveredOption(category)}
                        onMouseLeave={() => setHoveredOption(null)}
                      >
                        {category}
                      </option>
                    ))}
                    
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    style={{ color: 'red' }}
                  />
                </div>
              )}

              {/* Sum */}
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="sum"
                  style={{ display: 'block', fontWeight: 'bold' }}
                >
                  Sum:
                </label>
                <Field name="sum" type="text" placeholder="Enter sum" />
                <ErrorMessage
                  name="sum"
                  component="div"
                  style={{ color: 'red' }}
                />
              </div>

              {/* Date */}
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="date"
                  style={{ display: 'block', fontWeight: 'bold' }}
                >
                  Date:
                </label>

                <DatePicker
                  selected={values.date ? new Date(values.date) : null}
                  onChange={val => {
                    console.log('Date selected:', val);
                    setFieldValue('date', val);
                  }}
                  placeholderText="Select date"
                  dateFormat="dd/MM/yyyy"
                />

                <ErrorMessage
                  name="date"
                  component="div"
                  style={{ color: 'red' }}
                />
              </div>

              {/* Comment */}
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="comment"
                  style={{ display: 'block', fontWeight: 'bold' }}
                >
                  Comment:
                </label>
                <Field name="comment" type="text" placeholder="Enter comment" />
                <ErrorMessage
                  name="comment"
                  component="div"
                  style={{ color: 'red' }}
                />
              </div>

              {/* Butoane */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '20px',
                }}
              >
                <Button
                  type="submit"
                  sx={{
                    padding: '10px 20px',
                    backgroundColor: '#6a0dad',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: 'linear-gradient(to right, orange, violet)',
                    color: 'white',
                    padding: '7px 80px',
                    fontWeight: 'bold',
                    '&:hover': {
                      background:
                        'linear-gradient(to right, darkorange, darkviolet)',
                    },
                  }}
                >
                  Add
                </Button>

                <Button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '7px 66px',
                    backgroundColor: '#e0e0e0',
                    color: '#000',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddTransactionForm;
