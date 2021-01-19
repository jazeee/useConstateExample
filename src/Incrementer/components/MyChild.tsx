import { useMyHookContext } from '../state/useMyHook';

export const MyChild: React.FC = () => {
  const { count } = useMyHookContext();
  return (
    <span>Count is {count}</span>
  );
}