import ListItem from './ListItem';
import Headers from './Headers';

interface contract {
  id?: string | number;
  firstName: string;
  lastName: string;
  email: string;
  status?: string;
  startDate?: string;
  cancellationDate?: string;
}

interface Props {
  contracts: contract[];
}

const Table = ({ contracts }: Props) => (
  <div className="table">
    <Headers />
    <div>
      {contracts.length > 0 && contracts.map((contract: contract, index) => (
        <ListItem key={index.toString()} contract={contract} />
      ))}
    </div>
  </div>
);

export default Table;
