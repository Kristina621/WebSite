import React from 'react'
import { Button, Container } from "reactstrap";
import img from '../win.png'
import appExe from '../app/Setup.exe'
try {
    if (!appExe)
        appExe = undefined;
} catch (e) {
    appExe = undefined;
}

class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: "" };
        if (appExe !== undefined)
            fetch(appExe.toString())
                .then(response => response.headers.get('Content-Length'))
                .then(data => { return (data / 1024 / 1024).toFixed(2) }).then(sizeOf => this.setState({ size: sizeOf }));
    }

    render() {
        return (
            <div className="flex-grow">
                <div className="head-container  bg-img-5">
                    <div className="row justify-content-center">
                        <div className="text-center">
                            <h2 className="mt-0">
                                Установка
                            </h2>
                            <hr className="divider light my-4" />
                            <Container className="mt-5 pt-5">
                                <Button color="success" size="lg" className="btn-lg" block>
                                    <a href={appExe} download="Setup.exe" >
                                        Скачать для Windows
                                    </a>
                                    <img src={img} style={{ width: '60px' }} alt='windows' />
                                </Button>
                                <p className="mt-1">Размер {this.state.size} Мб</p>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download