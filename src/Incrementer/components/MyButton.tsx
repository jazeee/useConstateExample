import { useMyHookContext } from '../state/useMyHook';

export const MyButton: React.FC = () => {
  const { incrementCount } = useMyHookContext();
  return (
    <button onClick={incrementCount}>Increment Count</button>
  );
}