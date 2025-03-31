import { useState, useEffect } from 'react';
import { Modal, Box, Switch, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mui/material';
import backgroundImage from '../../images/noTransactions/add-transaction.jpg';
import styles from './EditTransactionForm.module.css';

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

const EditTransactionForm = ({ open, onClose, onSubmit, transaction }) => {
  const [transactionType, setTransactionType] = useState('Expense');

  useEffect(() => {
    // Set the transaction type based on the passed transaction
    if (transaction) {
      setTransactionType(transaction.type === '+' ? 'Income' : 'Expense');
    }
  }, [transaction]);

  const handleToggleChange = event => {
    setTransactionType(event.target.checked ? 'Expense' : 'Income');
  };

  const formatDate = date => {
    try {
      return new Date(date).toLocaleDateString('en-GB').replace(/\//g, '.');
    } catch (e) {
      return '';
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-transaction-modal"
      aria-describedby="edit-transaction-description"
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
        {/* Close Button */}
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
          id="edit-transaction-modal"
          style={{
            marginBottom: '38px',
            color: 'white',
            fontSize: '30px',
          }}
        >
          Edit Transaction
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{
            id: transaction?.id || '',
            sum: transaction?.sum || '',
            date: transaction?.date ? new Date(transaction.date) : null,
            category: transaction?.category || '',
            comment: transaction?.comment || '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            const updatedTransaction = {
              ...values,
              type: transactionType === 'Income' ? '+' : '-',
              date: values.date
                ? values.date.toLocaleDateString('en-GB').replace(/\//g, '.')
                : null,
            };
            onSubmit(updatedTransaction); // Pass updated transaction to parent
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Switch for Income/Expense */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  position: 'relative',
                }}
              >
                {/* Income */}
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
                      backgroundColor: 'white',
                      opacity: 1,
                    },
                  }}
                />

                {/* Expense */}
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

              {/* Category (for Expense) */}
              {transactionType === 'Expense' && (
                <div style={{ marginBottom: '30px' }}>
                  <Field
                    as="select"
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
                      style={{
                        backgroundColor: '#50309A',
                      }}
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
                        style={{
                          backgroundColor: '#50309A',
                        }}
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

              {/* Sum and Date */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px',
                }}
              >
                {/* Sum */}
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

                {/* Date */}
                <div
                  style={{
                    width: '48%',
                    position: 'relative',
                  }}
                >
                  <DatePicker
                    selected={values.date}
                    onChange={val => setFieldValue('date', val)}
                    placeholderText="Select a date"
                    dateFormat="dd/MM/yyyy"
                    className={styles['custom-datepicker']}
                    calendarClassName="react-datepicker"
                  />
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

              {/* Buttons */}
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
                    fontWeight: 'bold',
                    '&:hover': {
                      background:
                        'linear-gradient(to right, darkorange, darkviolet)',
                    },
                  }}
                >
                  Save
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

export default EditTransactionForm;
