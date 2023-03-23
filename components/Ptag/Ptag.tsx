import { PtagProps } from './Ptag.props';
import style from './Ptag.module.css';

export function Ptag({
  size = 'mdp',
  children,
  ...props
}: PtagProps): JSX.Element {
  switch (size) {
    case 'smp':
      return (
        <p className={style.smp} {...props}>
          {children}
        </p>
      );
    case 'mdp':
      return (
        <p className={style.mdp} {...props}>
          {children}
        </p>
      );
    case 'lgp':
      return (
        <p className={style.lgp} {...props}>
          {children}
        </p>
      );
    default:
      return <></>;
  }
}
