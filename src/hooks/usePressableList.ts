import {useCallback, useMemo, useState} from 'react';

type usePressableListProps = {
  activeIndex?: number;
  count: number;
};

export default ({activeIndex = 0, count}: usePressableListProps) => {
  const [list, setList] = useState(
    Array.from({length: count}, (_, index) => ({
      index,
      isVisible: activeIndex === index,
    })),
  );

  const onPressed = useCallback(
    (index: number) => {
      setList(
        list.map(listItem => ({
          ...listItem,
          isVisible: listItem.index === index,
        })),
      );
    },
    [list],
  );

  const values = useMemo(() => ({list, onPressed}), [list, onPressed]);

  return values;
};
