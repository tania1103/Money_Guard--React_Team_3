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
import { Button } from '@mui/material';
import backgroundImage from '../../images/noTransactions/add-transaction.jpg';
import styles from './AddTransactionForm.module.css';
import './DatePickerStyles.css'; 

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
  
  const handleToggleChange = event => {
    setTransactionType(event.target.checked ? 'Expense' : 'Income');
  };
  
  const currentDate = new Date()
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '.');

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
          width: 440,
          textAlign: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Buton X */}
        <Button
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '18px',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          ✖
        </Button>
        <div
          id="add-transaction-modal"
          style={{
            marginBottom: '38px',
            color: 'white',
            fontSize: '30px',
          }}
        >
          Add transaction
        </div>

        {/* Formik Formular */}
        <Formik
          initialValues={{
            sum: '',
            date: null,
            category: '',
            comment: '',
            // transactionType: 'Expense',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            // const formattedDate = values.date
            //   ? values.date.toLocaleDateString('en-GB').replace(/\//g, '.') // formateaza în DD/MM/YYYY
            //   : null;
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
                    marginBottom: '18px',
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
                    marginBottom: '18px',
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
                    marginBottom: '18px',
                    color: transactionType === 'Expense' ? 'red' : 'white',
                  }}
                >
                  Expense
                </Typography>
              </div>

              {/* Category (pentru cheltuieli) */}
              {transactionType === 'Expense' && (
                <div style={{ marginBottom: '30px' }}>
                  <Field
                    as="select" // Dropdown menu
                    name="category"
                    style={{
                      width: '100%',
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
                      className="dropdown-option"
                      style={{
                        //color: hoveredOption === null ? 'white' : 'red',
                        backgroundColor: '#50309A',
                        // background:
                        //   'linear-gradient(135deg, #533DBA 0%, #50309A 25%, #6A46A5 75%, #855DAF 100%)',
                      }}
                      //   onMouseEnter={() => setHoveredOption(null)}
                      //   onMouseLeave={() => setHoveredOption(null)}
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
                        className="dropdown-option"
                        style={{
                          //color: hoveredOption === category ? 'red' : 'white',
                          backgroundColor: '#50309A',
                          //   background:
                          //     'linear-gradient(135deg, #533DBA 0%, #50309A 25%, #6A46A5 75%, #855DAF 100%)',
                        }}
                        // onMouseEnter={() => setHoveredOption(category)}
                        // onMouseLeave={() => setHoveredOption(null)}
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

              {/* Sum and Date on the same line */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px',
                }}
              >
                {/* Sum input */}
                <Field
                  name="sum"
                  type="text"
                  style={{
                    width: '48%',
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '8px',
                    border: 'none',
                    borderBottom: '1px solid #fff',
                    fontSize: '12px',
                    outline: 'none',
                    textAlign: 'center',
                  }}
                  placeholder="0.00"
                  className={styles['custom-datepicker']}
                />

                <div
                  style={{
                    width: '48%',
                    position: 'relative',
                  }}
                >
                  {/* Input pentru data cu iconița în interior */}
                  <DatePicker
                    selected={values.date ? new Date(values.date) : null}
                    onChange={val => {
                      console.log('Date selected:', val);
                      setFieldValue('date', val);
                    }}
                    placeholderText={currentDate}
                    dateFormat="dd/MM/yyyy"
                    className={styles['custom-datepicker']}
                    calendarClassName="react-datepicker"
                  />

                  {/* Iconița Calendar în interiorul input-ului */}
                  <span
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      pointerEvents: 'none',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                      color="grey"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Errors */}
              <ErrorMessage
                name="sum"
                component="div"
                style={{ color: 'red' }}
              />
              <ErrorMessage
                name="date"
                component="div"
                style={{ color: 'red' }}
              />

              {/* Comment */}
              <div style={{ marginBottom: '35px' }}>
                <Field
                  name="comment"
                  type="text"
                  className={styles['custom-datepicker']}
                  placeholder="Comment"
                />
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
                    // padding: '10px 20px',
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
