import './styles.css';

const ListItem = ({ contract }: any) => (
  <div className="list__item">
    <div className="list__col--id">{contract?.id}</div>
    <div className="list__col">{contract?.firstName}</div>
    <div className="list__col">{contract?.lastName}</div>
    <div className="list__col">{contract?.email}</div>
    <div className="list__col">{contract?.status || '-'}</div>
    <div className="list__col">{contract?.startDate || '-'}</div>
    <div className="list__col">{contract?.cancellationDate || '-'}</div>
  </div>
)

export default ListItem;
