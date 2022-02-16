import { Button, Form, Input, DatePicker, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./updateProfile.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { getUserById } from "../../../services/backoffice/usersApi";
import { connect } from "react-redux";


const UpdateProfile = (props) => {
    let dataAdmin = {}
    const [form] = Form.useForm();
    const antProps = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    }
    const dateFormat = "YYYY-MM-DD";

    const [state, setState] = useState(
        {
            data: {}
        }
    )

    const getAdminData = async () => {
        dataAdmin = await getUserById(props.admin.id)
       console.log('data admin', dataAdmin)
    }

    useEffect(async() => {
        await getAdminData()
        setState({ data: dataAdmin })
        console.log('state data', state.data)
    }, [])

    return (
        <div className="update-profile-container" >

            <Form
                className="update-profile-form"
                layout={"horizontal"}
                form={form}
                initialValues={state.data}
            >
                <span className="update-profile-img"></span>
                <Upload className="update-profile-upload" {...antProps}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>

                <div className="update-profile-info">
                    <Form.Item name="name" label="Nome">
                        <Input placeholder="inserisci nome" />
                    </Form.Item>
                    <Form.Item name="lastName" label="Cognome">
                        <Input placeholder="inserisci cognome" />
                    </Form.Item>
                    <Form.Item name="birthDate" label="Data di nascita">
                        <DatePicker
                            initialValue={moment('01/01/1990', dateFormat)}
                            format={dateFormat}
                        />
                    </Form.Item>
                    <Form.Item name="birthPlace" label="Luogo di nascita">
                        <Input placeholder="inserisci luogo di nascita" />
                    </Form.Item>
                </div>
                <div className="update-profile-contacts">
                    <Form.Item name="email" label="Email">
                        <Input type="email" placeholder="inserisci la tua email" />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Numero di telefono">
                        <Input placeholder="inserisci numero di telefono " />
                    </Form.Item>
                    <Form.Item name="businessEmail" label="Email aziendale">
                        <Input type="email" placeholder="inserisci email aziendale" />
                    </Form.Item>
                </div>
                <div className="update-profile-button">
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </div >
    )

}

const mapStateToProps = (state) => (
    {
        admin: state.adminDuck.admin
    }
)

export default connect(mapStateToProps)(UpdateProfile)