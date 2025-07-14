import Card from './Card';

export default { title: 'UI/Card', component: Card };

export const Default = () => (
  <Card>
    <h3 className="text-xl font-bold">Заголовок</h3>
    <p>Описание карточки.</p>
  </Card>
);
