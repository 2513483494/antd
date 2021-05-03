import React from 'react'
import { Form, Card, Input, Button } from 'antd'

function Edit(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const priceValidate = (rule, value ,callback) => {
        if(value>100) {
            callback('价格不能大于100')
        }
    }
    return (
        <Card title='商品编辑'>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item label='名字' name='商品名称' rules={[{ required: true, message: '请输入商品名称！' }]}>
                    <Input placeholder='请输入商品名称'></Input>
                </Form.Item>
                <Form.Item label='价格' name='商品价格' 
                rules={[
                    { required: true, message: '请输入商品价格'},
                    {validator: priceValidate}
                    ]}>
                    <Input placeholder='请输入商品价格'></Input>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>保存</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit
