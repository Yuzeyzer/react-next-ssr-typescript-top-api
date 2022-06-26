import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - 2021 Все права защищены</div>
    </footer>
  );
};
