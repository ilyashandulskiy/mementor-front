import React from 'react';
import Button from 'components/ui/Button';
import styles from './PriceBlock.module.css';
import cn from 'classnames';
import cash from 'helpers/cash';

interface Props {
  name: string;
  price: number;
  description: string;
  buttonText?: string;
  onClick?: () => void;
  disableActions?: boolean;
}

const PriceBlock = ({
  name,
  price,
  description,
  buttonText,
  onClick,
  disableActions,
}: Props) => {
  return (
    <div className={cn(['card', 'box-shadow', styles.wrapper])}>
      <div className="card-header">
        <h4 className="my-2 font-weight-normal">{name}</h4>
      </div>
      <div className={cn(['card-body', styles.container])}>
        <h2 className="card-title pricing-card-title">{cash.display(price)}</h2>
        <p>{description}</p>
        <Button onClick={onClick} type="primary" disabled={disableActions}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PriceBlock;
