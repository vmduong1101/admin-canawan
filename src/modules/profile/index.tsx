import { Form, Input } from 'antd';
import style from './style.module.scss'
import 'antd/dist/antd.min.css';
import ButtonComponent from '../../components/common/button';

type Props = {}

const Profile = (props: Props) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={style.profile}>
            <div className={style.main}>
                <div className={style.left}>
                    <div className={style.leftTitle}>
                        <img src='https://i.scdn.co/image/ab67616d0000b27387bfec023ebe8c31c6eb348b' alt='avatar' />
                        <div>
                            <h5>Võ Minh Đương</h5>
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div className={style.leftContent}>
                        <div className={style.leftContentItem}>
                            <span>Email</span>
                            <a href='#'>duongvm@canawan.com</a>
                        </div>
                        <div className={style.leftContentItem}>
                            <span>Joined</span>
                            <a href='#'>07 Nov 2022</a>
                        </div>
                        <div className={style.leftContentItem}>
                            <span>Identity No</span>
                        </div>
                    </div>
                    <div className={style.leftChange}>
                        <p>
                            <a href='#'>Information</a>
                        </p>
                        <p>
                            <a href='#'>Change Password</a>
                        </p>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.rightTitle}>
                        <div>
                            <h3>Personal Information</h3>
                            <p>Update your personal information</p>
                        </div>
                        <ButtonComponent title='Save Change' />
                    </div>
                    <div className={style.rightInfor}>
                        <h3>Information</h3>
                        <div className={style.form}>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Fullname"
                                    name="fullname"
                                >
                                    <Input disabled defaultValue='Võ Minh Đương' width='100px' />
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                >
                                    <Input disabled defaultValue='minh.duong' />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                >
                                    <Input disabled defaultValue='duongvm@canawan.com' />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile