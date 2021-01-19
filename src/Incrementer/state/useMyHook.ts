import { useState, useCallback } from 'react';
import constate from 'constate';

interface Props {
  increment: number;
}

export function _useMyHook(props: Props) {
  const { increment } = props;
  const [count, setCount] = useState<number>(0);

  const incrementCount = useCallback(() => {
    setCount(value => value + increment);
  }, [increment]);

  return { count, setCount, incrementCount };
}

export const [MyHookProvider, useMyHookContext] = constate(_useMyHook);
