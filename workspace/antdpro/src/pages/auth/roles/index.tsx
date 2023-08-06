import { addItem, queryList, removeItem, updateItem } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { FooterToolbar, PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useAccess } from '@umijs/max';
import { Button, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/Update';
import Update from './components/Update';
import Create from './components/Create';
import Show from './components/Show';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.ListItem) => {
  const hide = message.loading('正在添加');
  try {
    await addItem('/roles', { ...fields });
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
    await updateItem(`/roles/${fields.id}`, fields);
    hide();

    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (ids: number[]) => {
  const hide = message.loading('正在删除');
  if (!ids) return true;
  try {
    await removeItem('/roles', {
      ids,
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
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
  const [currentRow, setCurrentRow] = useState<API.UserListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.UserListItem[]>([]);

  const access = useAccess();

  const columns: ProColumns<API.UserListItem>[] = [
    {
      title: '名称',
      width: 200,
      dataIndex: 'name',
      // hideInSearch: true,
      render: (dom, entity) => {
        if (entity.id !== 1) {
          return (
            <a
              onClick={() => {
                setCurrentRow(entity);
                setShowDetail(true);
              }}
            >
              {dom}
            </a>
          );
        }else {
          return dom;
        }
      },
    },
    {
      title: '权限列表',
      dataIndex: 'permissions',
      renderText: (val: { name: string }[]) => {
        return val.map((item) => item.name).join(', ');
      },
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '创建时间',
      width: 250,
      hideInSearch: true,
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (_, record) => [
        // access.canUpdateRole && (
        record.id !== 1 && (  
          <a
            key="update"
            onClick={() => {
              handleUpdateModalOpen(true);
              setCurrentRow(record);
            }}
          >
            编辑
          </a>
        ),
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserListItem, API.PageParams>
        headerTitle="角色管理"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        pagination={{ defaultPageSize: 10 }}
        // scroll={{ x: 1200 }}
        toolBarRender={() => [
          // access.canCreateRole && (
            <Button
              type="primary"
              key="primary"
              onClick={() => {
                handleModalOpen(true);
              }}
            >
              <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
            </Button>
          // ),
        ]}
        request={async (params, sort, filter) => queryList('/roles', params, sort, filter)}
        columns={columns}
        rowSelection={false}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            type="primary"
            danger
            onClick={() => {
              return Modal.confirm({
                title: '确认删除?',
                onOk: async () => {
                  await handleRemove(selectedRowsState?.map((item) => item.id!));
                  setSelectedRows([]);
                  actionRef.current?.reloadAndRest?.();
                },
                content: '确定删除吗？',
                okText: '确认',
                cancelText: '取消',
              });
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
        </FooterToolbar>
      )}
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
      <Update
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
        currentRow={currentRow as API.UserListItem}
        columns={columns as ProDescriptionsItemProps<API.UserListItem>[]}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
      />
    </PageContainer>
  );
};

export default TableList;
