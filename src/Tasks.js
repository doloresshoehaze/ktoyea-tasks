import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import './Tasks.css';

class Tasks extends React.Component {
  state = {
    isSubmited: false,
    score: 0,
  }

  get tasks() {
    return [
      {
        name: 'Et ullamco ad aliquip culpa excepteur amet labore nisi laboris',
        correctAnswer: ['0', '2'],
        id: 'first',
        type: 'checkbox',
        weight: 10,
        answers: [
          {
            name: 'Ullamco irure quis deserunt officia est.',
            id: '0',
          },
          {
            name: 'Elit duis fugiat in cupidatat amet sint aliqua.',
            id: '1',
          },
          {
            name: 'Eu nulla irure dolore elit laboris exercitation sit do reprehenderit esse sunt voluptate.',
            id: '2',
          },
          {
            name: 'Consequat incididunt non ea commodo sint ut ad ea enim veniam cillum culpa.',
            id: '3',
          },
        ]
      },
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
        name: 'Elit Lorem esse veniam et consequat minim cupidatat officia quis do aliqua commodo ex.',
        correctAnswer: 'answer',
        id: 'third',
        type: 'text',
        placeholder: 'Labore veniam nulla fugiat quis ex aliquip laborum anim ipsum est.',
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

  submit(values) {
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
        <Link
          className="App-link"
          to=""
        >
          На главную
          </Link>
        {isSubmited ?
          <h2>Yor score is: {Math.ceil(score / this.topScore * 10)} points</h2> :
          <h2>Выберите правильный вариант</h2>}
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
                        <div className="answers">
                          <Field type="text"
                            placeholder={task.placeholder}
                            id={task.id}
                            value={values[task.id]}></Field>
                        </div>
                      </div>)
                    default:
                      return null;
                  }
                })}
                <button type="submit" className="button" disabled={isSubmitting}>
                  SUBMIT
              </button>
              </Form>
            )}
          </Formik>
        }
      </div >
    );
  }
}



export default Tasks;
