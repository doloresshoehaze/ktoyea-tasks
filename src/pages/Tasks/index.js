import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Tasks extends React.Component {
  state = {
    isSubmited: false,
    isMinimumScoreGayned: true,
    score: 0,
  }

  get tasks() {
    return [
      {
        name: 'Cette route est très (dangereux).',
        correctAnswer: '2',
        id: 'second',
        type: 'radio',
        weight: 10,
        answers: [
          {
            name: 'dangereux',
            id: '0',
          },
          {
            name: 'dangereuxe',
            id: '1',
          },
          {
            name: 'dangereuse',
            id: '2',
          },
        ]
      },
      {
        name: 'Cette nouvelle est (faux).',
        correctAnswer: '0',
        id: 'prim',
        type: 'radio',
        weight: 10,
        answers: [
          {
            name: 'fausse',
            id: '0',
          },
          {
            name: 'faux',
            id: '1',
          },
          {
            name: 'fause',
            id: '2',
          },
        ]
      },
      {
        name: 'Ma voisine est  (curieux) et (indiscret).',
        correctAnswer: '0',
        id: 'duo',
        type: 'radio',
        weight: 10,
        answers: [
          {
            name: 'curieuse, indiscrète',
            id: '0',
          },
          {
            name: 'curieuxe, indiscrete',
            id: '1',
          },
          {
            name: 'curieuse, indiscrette',
            id: '2',
          },
        ]
      },
      {
        name: "Cette fille n'est pas très(franc); elle est(menteur).",
        correctAnswer: '1',
        id: 'trio',
        type: 'radio',
        weight: 10,
        answers: [
          {
            name: 'franche, menteure',
            id: '0',
          },
          {
            name: 'franche, menteuse',
            id: '1',
          },
          {
            name: 'franche, mentrice',
            id: '2',
          },
        ]
      },
      {
        name: 'Je vous présente mon (vieux)  ami Pascal.',
        correctAnswer: '1',
        id: 'quatro',
        type: 'radio',
        weight: 10,
        answers: [
          {
            name: 'vieux',
            id: '0',
          },
          {
            name: 'vieil',
            id: '1',
          },
          {
            name: 'vieul',
            id: '2',
          },
        ]
      },

      {
        name: 'Заполните пропуски:',
        text: 'un poète rêveur - une personne',
        correctAnswer: ['reveuse', 'rêveuse'],
        id: 'third',
        type: 'text',
        weight: 10,
        // orderNumber: 7,
      },
      {
        text: 'un garçon gentil - une fille',
        correctAnswer: ['gentille'],
        id: 'uno',
        type: 'text',
        weight: 10,
      },
      {

        text: 'l’esprit créateur - l’imagination',
        correctAnswer: ['créateurice', 'creatrice'],
        id: 'dos',
        type: 'text',
        weight: 10,
      },
      {

        text: 'un ami personnel - une amie',
        correctAnswer: ['personnelle'],
        id: 'tres',
        type: 'text',
        weight: 10,
      },
      {

        text: 'un anneau précieux - une bague',
        correctAnswer: ['précieuse', 'precieuse'],
        id: 'cuatro',
        type: 'text',
        weight: 10,
      }

    ]
  }

  get initialValues() {
    const init = {};
    this.tasks.forEach(task => {
      switch (task.type) {
        case 'checkbox':
          init[task.id] = [];
          break;
        case 'radio':
          init[task.id] = task.answers[0].id;
          break;
        default:
          init[task.id] = '';
      }
    });

    return init;
  }

  get topScore() {
    return this.tasks.reduce((p, c) => {
      p += c.weight;
      return p;
    }, 0);
  }

  submit() {
    this.setState({ isSubmited: true });
  }

  checkAnwers(values) {
    let score = 0;

    this.tasks.forEach(task => {
      const value = values[task.id];
      switch (task.type) {
        case 'checkbox': {
          let correctCounter = 0;

          task.correctAnswer.forEach(ca => {
            if (value.includes(ca)) {
              correctCounter += 1;
            }
          })

          if (correctCounter === task.correctAnswer.length) {
            score += task.weight;
          }

          break;
        }
        case 'text':
          if (task.correctAnswer.includes(value)) {
            score += task.weight;
          }
          break;
        default:
          if (task.correctAnswer === value) {
            score += task.weight;
          }
      }
    })
    const isMinimumScoreGayned = score / this.topScore >= 0.6;

    this.setState({ score, isMinimumScoreGayned });
  }

  render() {
    const { isSubmited, score, isMinimumScoreGayned } = this.state;

    return (
      <div className="Tasks">
        <div className="tasks-wrap">
          <Link
            className="App-link"
            to=""
          >
            На главную
          </Link>
          {
            isSubmited ?
              <h2>Ваш результат: {Math.ceil(score / this.topScore * 10)} баллов</h2> :
              <h2>Выберите правильный вариант и заполните пропуски</h2>
          }
          {
            isSubmited && !isMinimumScoreGayned ?
              <h2>Вернитесь к теории: </h2> :
              null
          }
          {isSubmited ?
            null :
            <Formik
              initialValues={this.initialValues}
              onSubmit={(values, { setSubmitting }) => {
                this.submit(values);
                this.checkAnwers(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form className="form" onSubmit={handleSubmit}>
                  {this.tasks.map((task, index) => {
                    switch (task.type) {
                      case 'checkbox':
                        return (<div key={task.id} className="task">
                          <h3>{index + 1}. {task.name}</h3>
                          <div className="answers">
                            {task.answers.map(answer => (
                              <label key={answer.id} className="answer" htmlFor={task.id + answer.id}>
                                <Field
                                  name={task.id}
                                  id={task.id + answer.id}
                                  type="checkbox"
                                  checked={values[task.id].includes(answer.id)}
                                  value={answer.id}></Field>
                                {answer.name}
                              </label>
                            ))}
                          </div>
                        </div>)
                      case 'radio':
                        return (<div key={task.id} className="task">
                          <h3>{index + 1}. {task.name}</h3>
                          <div className="answers">
                            {task.answers.map(answer => (
                              <label key={answer.id} className="answer" htmlFor={task.id + answer.id}>
                                <Field name={task.id}
                                  id={task.id + answer.id}
                                  type="radio"
                                  checked={values[task.id] === answer.id}
                                  value={answer.id}></Field>
                                {answer.name}
                              </label>
                            ))}
                          </div>
                        </div>)
                      case 'text':
                        return (<div key={task.id} className="task">
                          {task.name ? <h3>{task.orderNumber || index + 1}. {task.name}</h3> : null}
                          <span className="answer-text">
                            {task.text.split('<input>')[0]}
                            <div className="input-wrap">
                              <Field type="text"
                                id={task.id}
                                value={values[task.id]}></Field>
                              <p className="fake">{task.correctAnswer.sort((a, b) => a.length - b.length)[0].replace(/[A-Za-z]/ig, 'A')}</p>
                            </div>
                            {task.text.split('<input>')[1]}
                          </span>
                        </div>)
                      default:
                        return null;
                    }
                  })}
                  <button type="submit" className="button" disabled={isSubmitting}>
                    Получить результат
              </button>
                </Form>
              )}
            </Formik>
          }
        </div>
      </div>
    );
  }
}

export default Tasks;
