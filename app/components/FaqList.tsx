import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Sortable } from '../components/Sortable';
import { useCallback, useState } from 'react';
import update from 'immutability-helper';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I get started?',
    answer:
      'You can start by creating an account on our platform. Once you have created an account, you can start browsing through the list of available courses. You can enroll in any course you like and start learning right away.',
  },
  {
    id: 2,
    question: 'How do I enroll in a course?',
    answer:
      'You can enroll in a course by clicking on the enroll button. Once you have enrolled in a course, you will have lifetime access to that course.',
  },
  {
    id: 3,
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel your subscription at any time by going to the settings page.',
  },
  {
    id: 4,
    question: 'How do I contact support?',
    answer: 'You can contact support by sending us an email at',
  },
];


const FaqList = () => {
  const [items, setItems] = useState(faqs);

  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevCards: FAQ[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as FAQ],
        ],
      })
    );
  }, []);

  const renderItem = useCallback(
    (item: FAQ, index: number) => {
      return (
        <Sortable
          key={item.id}
          index={index}
          id={item.id}
          text={item.question}
          moveCard={moveItem}
        />
      );
    },
    [moveItem]
  );

  return (
    <div>
      {' '}
      <DndProvider backend={HTML5Backend}>
        <div>{items.map((item, i) => renderItem(item, i))}</div>
      </DndProvider>
    </div>
  );
};

export default FaqList;
