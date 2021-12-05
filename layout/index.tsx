import { ILayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
