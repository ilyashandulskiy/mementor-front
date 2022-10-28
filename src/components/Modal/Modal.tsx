import cn from 'classnames';
import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOnClickOutside } from 'hooks/useClickOutside';

interface Props {
  opened: boolean;
  children: ReactNode | ReactNode[];
  title: string;
  onClose: () => void;
}

interface Styles {
  display?: 'block';
  pointerEvents?: 'all' | 'none';
  background?: 'rgba(0,0,0,0.5)';
}

function Modal({ opened, children, title, onClose }: Props) {
  const ref = useRef<any>();
  useOnClickOutside(ref, onClose);
  const backdropStyles: Styles = {
    display: 'block',
    pointerEvents: opened ? 'all' : 'none',
    background: 'rgba(0,0,0,0.5)',
  };
  const styles: Styles = { pointerEvents: opened ? 'all' : 'none' };
  const DOMelement = document.getElementById('modal')!;
  return createPortal(
    <div
      className={cn(['modal', 'fade', { show: opened }])}
      style={backdropStyles}
    >
      <div className="modal-dialog" style={styles} ref={ref}>
        <div className="modal-content" style={styles}>
          <div className="modal-header" style={styles}>
            <h5 className="modal-title">{title}</h5>
            <button onClick={onClose} type="button" className="btn-close" />
          </div>
          <div style={styles} className="modal-body">
            {opened && children}
          </div>
        </div>
      </div>
    </div>,
    DOMelement
  );
}

export default Modal;
