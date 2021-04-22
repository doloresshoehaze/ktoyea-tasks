import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Tasks extends React.Component {
  state = {
    isSubmited: false,
    score: 0,
  }

  get tasks() {
    return [
      // {
      //   name: 'Et ullamco ad aliquip culpa excepteur amet labore nisi laboris',
      //   correctAnswer: ['0', '2'],
      //   id: 'first',
      //   type: 'checkbox',
      //   weight: 10,
      //   answers: [
      //     {
      //       name: 'Ullamco irure quis deserunt officia est.',
      //       id: '0',
      //     },
      //     {
      //       name: 'Elit duis fugiat in cupidatat amet sint aliqua.',
      //       id: '1',
      //     },
      //     {
      //       name: 'Eu nulla irure dolore elit laboris exercitation sit do reprehenderit esse sunt voluptate.',
      //       id: '2',
      //     },
      //     {
      //       name: 'Consequat incididunt non ea commodo sint ut ad ea enim veniam cillum culpa.',
      //       id: '3',
      //     },
      //   ]
      // },
      {
        name: 'Exercitation exercitation nostrud Lorem sit Lorem consectetur labore nostrud minim.',
        correctAnswer: '2',
        id: 'second',
        type: 'radio',
        weight: 20,
        answers: [
          {
            name: 'Ullamco in enim ullamco et nisi voluptate sunt.',
            id: '0',
          },
          {
            name: 'Dolor voluptate duis sunt laboris culpa consequat in deserunt nisi.',
            id: '1',
          },
          {
            name: 'Esse nulla qui fugiat et nostrud cillum excepteur ea.',
            id: '2',
          },
          {
            name: 'Aliqua exercitation consequat do minim.',
            id: '3',
          },
        ]
      },
      {
        name: 'Elit Lorem esse veniam et minim cupidatat officia quis do aliqua commodo ex.',
        text: 'Anim id exercitation cupidatat <input> minim consectetur officia.',
        correctAnswer: ['answer', 'answwer'],
        id: 'third',
        type: 'text',
        weight: 70,
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
        default:
          if (task.correctAnswer === value) {
            score += task.weight;
          }
      }
    })

    this.setState({ score });
  }

  render() {
    const { isSubmited, score } = this.state;

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
                          <h3>{index + 1}. {task.name}</h3>
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
