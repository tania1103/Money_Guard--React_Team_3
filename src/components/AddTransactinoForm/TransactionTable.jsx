import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TransactionItem from './TransactionItem';
import styles from './TransactionTable.module.css';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
        },
        head: {
          backgroundColor: '#523B7E99',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '20px',
          lineHeight: '1.3',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:first-of-type > .MuiTableCell-head:first-of-type': {
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          },
          '&:first-of-type > .MuiTableCell-head:last-child': {
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
          },
          '&:not(:last-child)': {
            // Linie doar intre randuri, nu pentru ultimul
            borderBottom: '1px solid rgba(160, 147, 160, 0.8)',
            width: 'fit-content',
          },
          padding: '10px',
        },
      },
    },
  },
});

const TransactionTable = ({
  transactions,
  onDeleteTransaction,
  onUpdateTransaction,
}) => (
  <ThemeProvider theme={theme}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Comment</TableCell>
          <TableCell>Sum</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={styles.trList}>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id || index}
            {...transaction}
            onDeleteTransaction={onDeleteTransaction}
            onUpdateTransaction={onUpdateTransaction}
          />
        ))}
      </TableBody>
    </Table>
  </ThemeProvider>
  
);

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      sum: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteTransaction: PropTypes.func.isRequired,
  onUpdateTransaction: PropTypes.func.isRequired,
};

export default TransactionTable;

