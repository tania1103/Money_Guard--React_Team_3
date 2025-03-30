import PropTypes from 'prop-types';
import { TableRow, TableCell, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.income': {
            color: 'orange',
            fontWeight: 'bold',
          },
          '&.expense': {
            color: 'pink',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});

const TransactionItem = ({
  id,
  date,
  type,
  category,
  comment,
  sum,
  onDeleteTransaction,
  onUpdateTransaction,
}) => (
  <ThemeProvider theme={theme}>
    <TableRow>
      <TableCell>
        {typeof date === 'string'
          ? date
          : new Date(date).toLocaleDateString('en-GB')}
      </TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{comment}</TableCell>
      <TableCell className={type === '+' ? 'income' : 'expense'}>
        {sum}
      </TableCell>
      <TableCell>
        <Button
          startIcon={<EditIcon />}
          onClick={() => onUpdateTransaction(id)}
          style={{
            color: 'white',
            background: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            marginRight: '5px',
          }}
        ></Button>
        <Button
          variant="contained"
          onClick={() => onDeleteTransaction(id)}
          sx={{
            background: 'linear-gradient(to right, orange, violet)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(to right, darkorange, darkviolet)',
            },
            borderRadius: '20px',
            padding: '10px 20px',
            fontWeight: 'bold',
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  </ThemeProvider>
);

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  onDeleteTransaction: PropTypes.func.isRequired,
  onUpdateTransaction: PropTypes.func.isRequired,
};

export default TransactionItem;
