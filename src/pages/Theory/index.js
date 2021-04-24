import { Link } from 'react-router-dom';

function Theory() {
  return (
    <div className="Theory">
      <h3>Женский род имен прилагательных</h3>
      <p>Прилагательные во французском языке согласуются в роде и числе с существительным, <br />к которому относятся. Женский род образуется путем прибавления окончания <span className="h-blue">-e</span> <br /> к прилагательному мужского рода:<br />
        <em>grand - grand<span className="h-blue">e</span></em> <br />
        <em>petit – petit<span className="h-blue">e</span></em><br />
        <em>national – national<span className="h-blue">e</span></em></p>
      <p><span className="h-red">Внимание!</span> Некоторые прилагательные мужского рода тоже имеет на конце эту букву. <br />Их просто надо запомнить. Они по родам не меняются:<br />
        <em>rouge (красный, -ая)</em><br />
        <em>jaune (желтый, -ая)</em><br />
        <em> jeune (молодой, -ая)</em></p>
      <h3>Особенности образования женского рода:</h3>
      <p>1. Удвоение согласной + е <br /></p>
      <p><span className="h-blue">-en / -enne</span><br />
        <em>un pays européen (европейская страна) – une langue européenne (европейский язык)</em><br />

        <span className="h-blue">-ien / -ienne</span><br />

        <em>un chanteur italien (итальянский певец) – une chanteuse italienne (итальянская певица)</em><br />

        <span className="h-blue">-on / -onne</span><br />

        <em>un garçon mignon (симпатичный мальчик) – une fille mignonne (симпатичная девочка)</em></p>
      <p>2. Другие случаи: <br /></p>
      <p><span className="h-blue">-er / -ère</span><br />
        <em>un homme étranger (мужчина иностранец) – une femme étrangère (женщина иностранка)</em><br />

        <span className="h-blue">-ier / -ière</span><br />

        <em>un problème financier (финансовая проблема) – une question financière (финансовый вопрос</em><br />

        <span className="h-blue">-eux / -euse</span><br />

        <em>un garçon courageux (храбрый мальчик) – une fille courageuse (храбрая девочка)</em><br />

        <span className="h-blue">-teur / -trice</span><br />

        <em>un geste protecteur (покровительственный жест) – une voix protectrice (покровительственный

голос)</em><br />

      </p>
      <Link
        className="App-link"
        to=""
      >
        На главную
      </Link>
    </div>
  );
}

export default Theory;
