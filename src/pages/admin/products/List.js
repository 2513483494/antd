import React from 'react'
import { Card, Table, Button, Popconfirm } from 'antd'

const dataSource = [{
    id:1,
    name: '茄子',
    price: 5
}, {
    id:2,
    name: '白菜',
    price: 6
},{
    id:3,
    name: '豆角',
    price: 7
},{
    id:4,
    name: '土豆',
    price: 8
},]
function List(props) {
    const columes = [{
        title: '序号',
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, record, index) => index+1
    }, {
        title: '名字',
        dataIndex: 'name'
    }, {
        title: '价格',
        dataIndex: 'price'
    }, {
        tltle: '操作',
        render: (txt, record, index) => {
            return (
                <div>
                    <Button style={{marginLeft: '10 30px'}} type='primary' size='small'>修改</Button>
                    <Popconfirm 
                    title='确定删除'
                    onCancel={()=>console.log('用户取消删除')}
                    onConfirm={()=>{
                        console.log('用户确认删除！')
                        }}>
                    <Button style={{margin:'0 50px'}} type='danger' size='small'>删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    }]
    return (
    <Card 
    title='商品列表' 
    extra={
    <Button 
    type='primary' 
    size='small'
    onClick={()=>props.history.push('/admin/products/edit')}>新增</Button>}>
        <Table 
        rowKey='id'
        columns={columes} 
        bordered
        dataSource={dataSource}></Table>
    </Card>
    )
}

export default List
