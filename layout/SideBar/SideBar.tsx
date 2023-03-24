import React from 'react';
import { SideBarProps } from './SideBar.props';

export default function SideBar({ ...props }: SideBarProps): JSX.Element {
  return <div {...props}>SideBar</div>;
}
