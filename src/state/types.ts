import React from "react";
import {
  INCREMENT,
  TAPPED_SCREEN,
  HIDE_MENU,
  SETTINGS_MODAL,
  HELP_MODAL,
} from "./actions";

export interface TappedAction {
  type: typeof TAPPED_SCREEN;
}

export interface CounterState {
  count: number;
}

export interface HideAction {
  type: typeof HIDE_MENU
}

export interface ChildrenWrapperProps {
  children?: React.ReactNode;
}

export interface MobileSiteProps extends ChildrenWrapperProps {
  onTap: (event: React.MouseEvent<HTMLElement>) => any;
  numTaps: number;
  menuVisible: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
}
