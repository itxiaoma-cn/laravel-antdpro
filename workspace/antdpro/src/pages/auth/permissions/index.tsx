import { queryList, addItem, updateItem } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import Create from './components/Create';
import Show from './components/Show';
import type { FormValueType } from './components/Update';
import UpdateForm from './components/Update';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.ListItem) => {
  const hide = message.loading('正在添加');
  try {
    await addItem('/permissions', { ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error: any) {
    hide();
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在更新');
  try {
    await updateItem(`/permissions/${fields.id}`, fields);
    hide();

    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    return false;
  }
};

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.ListItem>();

  const columns: ProColumns<API.ListItem>[] = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '父级名称',
      dataIndex: 'parent',
      renderText: (val: { name: string }) => val?.name,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (_, record) => [
            <a
              key="update"
              onClick={() => {
                handleUpdateModalOpen(true);
                setCurrentRow(record);
              }}
            >
              编辑
            </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.ListItem, API.PageParams>
        headerTitle="权限管理"
        actionRef={actionRef}
        rowKey="id"
        // scroll={{x: 1200}}
        search={false}
        pagination={{pageSize:10}}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        request={async (params, sort, filter) => queryList('/permissions', params, sort, filter)}
        columns={columns}
        rowSelection={false}
      />
      <Create
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.ListItem);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={handleUpdateModalOpen}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />
      <Show
        open={showDetail}
        currentRow={currentRow as API.ListItem}
        columns={columns as ProDescriptionsItemProps<API.ListItem>[]}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
      />  
    </PageContainer>
  );
};

export default TableList;
