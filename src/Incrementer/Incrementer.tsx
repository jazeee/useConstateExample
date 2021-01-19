import { ReactElement } from "react";
import { MyButton } from "./components/MyButton";
import { MyChild } from "./components/MyChild";
import { MyHookProvider } from "./state/useMyHook";

interface Props {
  increment?: number;
}

export function Incrementer(props: Props): ReactElement {
  const { increment = 1 } = props;
  return (
    <MyHookProvider increment={increment}>
      <MyChild />
      <br />
      <MyButton />
    </MyHookProvider>
  );
}
