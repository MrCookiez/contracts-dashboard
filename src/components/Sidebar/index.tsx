import './styles.css';

interface Props {
  children:  JSX.Element | JSX.Element[],
}

const Sidebar = ({ children }: Props) => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>{children}</div>
    </div>
  )
};

export default Sidebar;