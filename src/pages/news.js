import React from 'react'
import { Table, Container, Row, Col } from 'reactstrap';
class News extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Версия</th>
                  <th>Изменения</th>
                  <th>Дата изменения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>0.0.1</td>
                  <td>Ядро информационной системы </td>
                  <td>30.04.20</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>0.0.5</td>
                  <td>Прописаны вспомогательные функции ядра ИС</td>
                  <td>4.05.20</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>0.0.10</td>
                  <td>Введены триггеры лагирования</td>
                  <td>6.05.20</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>0.0.20</td>
                  <td>Созданы процедуры управления таблицами</td>
                  <td>7.05.20</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>0.1.0</td>
                  <td>Осуществлено подключение ядра ИС к приложению</td>
                  <td>10.05.20</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>0.1.2</td>
                  <td>Реализована система аутентификации</td>
                  <td>12.05.20</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>0.2.0</td>
                  <td>Введены способа управления таблицами</td>
                  <td>14.05.20</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>0.2.5</td>
                  <td>Введен персонализированный интерфейс</td>
                  <td>17.05.20</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>1.0.0</td>
                  <td>Применены средства автоматизации  ИС</td>
                  <td>20.05.20</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>1.0.2</td>
                  <td>Реализованы системы адаптации программного продукта</td>
                  <td>25.05.20</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default News