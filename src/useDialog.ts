import { useState, useCallback } from 'react';

/*
 * オープンとクローズをハンドルするイベントフック
 */
const useDialog = (defaultState: boolean = false): [boolean, () => void, () => void] => {
  const [is, setIS] = useState(defaultState);
  const handleOpen = useCallback(() => {
    setIS(true);
  }, []);
  const handleClose = useCallback(() => {
    setIS(false);
  }, []);

  return [is, handleOpen, handleClose];
};

export default useDialog;
