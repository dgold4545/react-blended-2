import style from './TodoListItem.module.css';
import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({
  text,
  count,
  onhandleDelete,
  id,
  handleChangeEditing,
}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text> {text} </Text>
      <button
        onClick={() => onhandleDelete(id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => handleChangeEditing({ id, text })}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
