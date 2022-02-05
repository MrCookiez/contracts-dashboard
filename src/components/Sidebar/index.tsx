import './styles.css';

interface Props {
  children:  JSX.Element | JSX.Element[],
  title: string;
}

const Sidebar = ({ children, title }: Props) => {
  return (
    <div className='sidebar'>
      <h1 className='sidebar__title'>{title}</h1>
      <div className='sidebar__container'>{children}</div>
    </div>
  )
};

export default Sidebar;