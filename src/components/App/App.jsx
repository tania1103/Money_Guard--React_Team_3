import { useState } from 'react';
import { Box } from '@mui/material';
import TransactionTable from '../AddTransactinoForm/TransactionTable';
import UpdateForm from '../AddTransactinoForm/UpdateForm';
import backgroundImage from '../../images/noTransactions/background-transactions.jpg';
import AddTransactionForm from '../AddTransactinoForm/AddTransactionForm';
import './App.css';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      date: '01-01-2023',
      type: '+',
      category: 'Salary',
      comment: 'January salary',
      sum: 3000,
    },
    {
      id: '2',
      date: '01-05-2023',
      type: '-',
      category: 'Groceries',
      comment: 'Weekly shopping',
      sum: 150,
    },
    {
      id: '3',
      date: '02-03-2025',
      type: '-',
      category: 'Car',
      comment: 'Weekly shopping',
      sum: 120,
    },
  ]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTransaction = newTransaction => {
    setTransactions(prevTransactions => [
      ...prevTransactions,
      {
        ...newTransaction,
        id: `${prevTransactions.length + 1}`,
        sum: Number(newTransaction.sum),
        type: newTransaction.type,
        date: newTransaction.date.toLocaleDateString('en-GB'),
      }, // genereaza un ID unic
    ]);
    setIsModalOpen(false); //
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
    updatedTransaction.sum = Number(updatedTransaction.sum);
    setTransactions(prevTransactions =>
      prevTransactions.map(transaction =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
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
        // onAddTransaction={handleAddTransaction}
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
