import { useDispatch, useSelector } from 'react-redux';
import { GlobalDispatch, GlobalState } from '../redux/store';
import { changePopup, popupIds } from '../redux/slices/PopupSlice';

export function usePopups(): [() => void, (id: popupIds) => void, popupIds] {
  const popupId = useSelector((state: GlobalState) => state.popups.popupId);
  const dispatch = useDispatch() as GlobalDispatch;

  const usePopupId = (id: popupIds) => {
    dispatch(changePopup(id));
  };
  const useClosePopup = () => {
    dispatch(changePopup(popupIds.NONE));
  };

  return [useClosePopup, usePopupId, popupId];
}
