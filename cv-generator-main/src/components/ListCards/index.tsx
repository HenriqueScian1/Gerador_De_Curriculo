import update from 'immutability-helper'
import { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
import { Layout } from './styles'
import { CVProps } from '../../store/reducers/cv.reducer';

interface ListCardProps<T> {
  list: Array<T>;
  type: string;
  data: (item: T, index: number) => JSX.Element;
  handleChangeList: (list: Array<T>) => void;
}

const ListCards = <T,>(props: ListCardProps<T>) => {
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    const sanitizedList = props.list.map((item) => sanitizeData(item as T));
    setList(sanitizedList as T[])
  }, [props.list])

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setList((prevItem) => {
      const newList = update(prevItem, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevItem[dragIndex]],
        ],
      });

      props.handleChangeList(newList);
      return newList;
    })
  }, [props])

  const sanitizeData = (item: T) => {
    if (props.type === 'skills') {
      const itemSkills = item as CVProps['skills'][0];

      return itemSkills;
    }

    if (props.type === 'languages') {
      const itemLang = item as CVProps['languages'][0];

      return {
        ...itemLang,
        label: itemLang.language,
      };
    }

    if (props.type === 'websites') {
      const itemWebsites = item as CVProps['websites'][0];

      return {
        ...item,
        label: itemWebsites.title,
      };
    }

    if (props.type === 'professionalHistory') {
      const itemCompany = item as CVProps['professionalHistory'][0];

      return {
        ...item,
        label: itemCompany.company,
      };
    }

    return item;
  }

  const renderCard = useCallback((item: T, index: number) => {
    return (
      <Card
        key={index}
        index={index}
        card={item}
        id={(item as { label: string }).label ?? item}
        moveCard={moveCard}
        data={props.data}
      />
    )
  }, [props.data, moveCard])

  return (
    <Layout>{list.map((item, i) => renderCard(item, i))}</Layout>
  )
}

export default ListCards;