import React, { useEffect, useState } from 'react';
import styles from './Tags.module.css';
import cn from 'classnames';

interface Props {
  label?: string;
  error?: boolean;
  tags: string[];
  setTags: (tags: string[]) => void;
  onBlur?: () => void;
  placeholder?: string;
}

const Tags = ({ label, error, tags, setTags, onBlur, placeholder }: Props) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (text[text.length - 1] === ' ') {
      if (text.trim().length > 0) {
        setTags([...tags, text]);
        setText('');
      }
    }
  }, [text]);

  const onBlurHandler = () => {
    onBlur && onBlur();
    if (text.trim().length > 0) {
      setTags([...tags, text]);
      setText('');
    }
  };

  const onDelete = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={cn(['form-control', styles.wrapper])}>
        {tags.map((tag, index) => (
          <div onClick={() => onDelete(index)} className={styles.tag}>
            {tag}
          </div>
        ))}
        <input
          placeholder={!tags.length ? placeholder : ''}
          value={text}
          onInput={(val) => setText(val.currentTarget.value)}
          className={styles.input}
          onBlur={onBlurHandler}
        />
      </div>
      {error && <p className={styles.error}>Поле заполнено не верно</p>}
    </div>
  );
};

export default Tags;
