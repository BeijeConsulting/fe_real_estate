import { Button, Form, Input, DatePicker, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./updateProfile.css";



const UpdateProfile = () => {
    const [form] = Form.useForm();
    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    }

    return (
        <div className="update-profile-container" >

            <Form
                className="update-profile-form"
                layout={"horizontal"}
                form={form}
            >
                <span className="update-profile-img"></span>
                <Upload className="update-profile-upload" {...props}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>

                <div className="update-profile-info">
                    <Form.Item label="Nome">
                        <Input placeholder="inserisci nome" />
                    </Form.Item>
                    <Form.Item label="Cognome">
                        <Input placeholder="inserisci cognome" />
                    </Form.Item>
                    <Form.Item label="Data di nascita">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Luogo di nascita">
                        <Input placeholder="inserisci luogo di nascita" />
                    </Form.Item>
                </div>
                <div className="update-profile-contacts">
                    <Form.Item label="Email">
                        <Input type="email" placeholder="inserisci la tua email" />
                    </Form.Item>
                    <Form.Item label="Numero di telefono">
                        <Input placeholder="inserisci numero di telefono " />
                    </Form.Item>
                    <Form.Item label="Email aziendale">
                        <Input type="email" placeholder="inserisci email aziendale" />
                    </Form.Item>
                </div>
                <div  className="update-profile-button">
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </div>
            </Form>
        </div >
    )

}

export default UpdateProfile