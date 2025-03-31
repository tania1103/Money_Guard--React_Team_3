import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { saveToLocalStorage, getFromLocalStorage } from '../TransactionsUtils/localStorageUtils';
import TransactionTable from '../AddTransactinoForm/TransactionTable';
import UpdateForm from '../AddTransactinoForm/UpdateForm';
import backgroundImage from '../../images/noTransactions/background-transactions.jpg';
import AddTransactionForm from '../AddTransactinoForm/AddTransactionForm';
import './App.css';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [transactions, setTransactions] = useState(() =>
    getFromLocalStorage()
  );
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveToLocalStorage(transactions);
  }, [transactions]);

 
  const handleAddTransaction = newTransaction => {
    console.log('New Transaction:', newTransaction);
    console.log('Transaction Type:', newTransaction.type);

    const transactionType = (newTransaction.type || 'Expense').trim();

    const transactionDate =
      typeof newTransaction.date === 'string'
        ? newTransaction.date.replace(/\//g, '.')
        : newTransaction.date.toLocaleDateString('en-GB').replace(/\//g, '.');

    setTransactions(prevTransactions => [
      ...prevTransactions,
      {
        ...newTransaction,
        id: uuidv4(),
        sum: Number(newTransaction.sum),
        type: transactionType,
        date: transactionDate,
      }, // genereaza un ID unic
    ]);
    setIsModalOpen(false);
  };

  const handleDeleteTransaction = id => {
    setTransactions(prevTransactions =>
      prevTransactions.filter(transaction => transaction.id !== id)
    );
  };

  const handleUpdateTransaction = id => {
    const transaction = transactions.find(transaction => transaction.id === id);
    setSelectedTransaction(transaction);
  };

  const handleSaveUpdate = updatedTransaction => {
    console.log('Updated Transaction Type:', updatedTransaction.type);

    const transactionType = updatedTransaction.type.trim();

    updatedTransaction.sum = Number(updatedTransaction.sum);

    setTransactions(prevTransactions =>
      prevTransactions.map(transaction =>
        transaction.id === updatedTransaction.id
          ? {
              ...updatedTransaction,
              type: transactionType === 'Income' ? '+' : '-',
              sum: Number(updatedTransaction.sum),
            }
          : transaction
      )
    );
    setSelectedTransaction(null);
    alert('Transaction updated!');
  };

  const handleCancelUpdate = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className={isModalOpen ? 'blurred' : ''}>
      {/* <h1>Transaction Manager</h1> */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <Box
          sx={{
            margin: '65px',
            marginTop: '50px',
            marginBottom: '50px',
            maxWidth: '90%',
            overflowX: 'auto',
            overflowY: 'auto',
          }}
        >
          {selectedTransaction ? (
            <UpdateForm
              transaction={selectedTransaction}
              onUpdate={handleSaveUpdate}
              onCancel={handleCancelUpdate}
            />
          ) : (
            <TransactionTable
              transactions={transactions}
              onDeleteTransaction={handleDeleteTransaction}
              onUpdateTransaction={handleUpdateTransaction}
            />
          )}
        </Box>
      </Box>

      <AddTransactionForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTransaction}
      />
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          padding: '10px',
        }}
      >
        <Fab
          sx={{
            background: 'linear-gradient(to right, orange, violet)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(to right, darkorange, darkviolet)',
            },
          }}
          aria-label="add"
          onClick={() => setIsModalOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default App;
