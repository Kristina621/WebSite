import React from 'react'
import app from "../app.png"
import {Table, Col, Row, Container} from 'reactstrap';
class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="">
                <h2 className="m-3">МЫ</h2>
                <p className="m-4">
                    «World Of Beauty» – данные салоны известны на рынке с 2016 года. Оказывая услуги косметического ухода за кожей лица, рук, уходом за волосами и высокому уровню MAKEUP’а компания непрерывно развивается и растет, из-за чего и нуждается в автоматизации и переходе на новый уровень функционирования бизнеса.
                    Основной задачей является закрытие потребности людей в уходе за своим телом, поставляя косметические услуги.
                    «World Of Beauty», помимо оказания косметических услуг, так же является одним из официальных дистрибьютеров брендов: Urban Decay, Make Up For Ever, Sephora, Lakme.

</p>
                <div className="m-3 row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card card-block mb-2">
                            <h2 className="text-center"><span className="label label-danger">Пользователей</span></h2>
                            <h1 className="text-center">29 742</h1>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-2">
                        <div className="card card-block">
                            <h2 className="text-center"><span className="label label-danger">Довольный клиентов</span></h2>
                            <h1 className="text-center">92 184</h1>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-2">
                        <div className="card card-block">
                            <h2 className="text-center"><span className="label label-danger">Постоянных клиентов</span></h2>
                            <h1 className="text-center">837</h1>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-2">
                        <div className="card card-block">
                            <h2 className="text-center"><span className="label label-danger">Солонов по всему миру</span></h2>
                            <h1 className="text-center">751</h1>
                        </div>
                    </div>
                </div>
                <h3 className="m-3 hidden-sm-down">Автоматизация подсистем</h3>
                <p className="m-4">Отдел кадров – данная подсистема имеет цель учета сотрудников и соискателей, хранения и работы с их персональными данными. Автоматизируется работа с вытекающей документацией, её выводом и составлением. В разы увеличивается сохранность персональных данных каждого сотрудника.
                Отдел приема товаров – данная подсистема предназначена для учёта товаров, поступающих на предприятие от поставщиков. Будет возможность просматривать и контролировать поступивший товар, составлять товарно-транспортную накладную и другие вспомогательные элементы.
                Отдел обслуживания клиентов – подсистема тесно связана с отделами кадров и закупок. Подсистема несет целью контроль взаимодействия клиента и фирмы, оказывающей услуги. Автоматизируется составление и учет каждого акта купле продажи.
</p>

<Container>
                <img style={{ height: "500px" }} src={app} />
                <h4>Минимальные аппаратные требования к персональному компьютеру</h4>
        <Row>
          <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>CPU</td>
                            <td>Процессор (32-разрядный) с тактовой частотой 1 ГГц или выше</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>RAM</td>
                            <td>1 GB или больше</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>HDD/SSD</td>
                            <td>5 Gb свободного места или более</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Видео адаптер</td>
                            <td>От 100 Мб видеопамяти или более</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Сетевая карта</td>
                            <td>Не менее 10 Mb/s или более</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Манипуляторы</td>
                            <td>Мышь, Клавиатура</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Периферийные устройства</td>
                            <td>Монитор (1366 x 768)</td>
                        </tr>

                    </tbody>
                </Table>
                
        </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default About