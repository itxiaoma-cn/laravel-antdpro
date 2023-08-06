import useQueryList from '@/hooks/useQueryList';
import { removeRule, queryList, addItem, updateItem, removeItem } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Tag, message, TreeSelect, Select, Modal } from 'antd';
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
const handleAdd = async (fields: API.UserListItem) => {
  const hide = message.loading('正在添加');
  try {
    await addItem('/users', { ...fields });
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
    await updateItem(`/users/${fields.id}`, fields);
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
    await removeItem('/users', {
      ids,
    });
    hide();
    message.success('删除成功');
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

  const { items: roles } = useQueryList('/roles');
  const { items: departments } = useQueryList('/company/departments');

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.UserListItem>[] = [
    {
      title: '姓名',
      width: 200,
      dataIndex: 'name',
      // hideInSearch: true,
      // render: (dom, entity) => {
      //   return (
      //     <a
      //       onClick={() => {
      //         setCurrentRow(entity);
      //         setShowDetail(true);
      //       }}
      //     >
      //       {dom}
      //     </a>
      //   );
      // },
    },
    {
      title: '邮箱',
      sorter: true,
      copyable: true,
      width: 300,
      dataIndex: 'email',
    },
    {
      title: '性别',
      width: 100,
      dataIndex: 'gender',
      valueEnum: {
        男: { text: '男' },
        女: { text: '女' },
      },
      hideInSearch: true,
    },
    {
      title: '部门',
      width: 300,
      dataIndex: 'department',
      renderText: (val: { name: string }) => val?.name,
      hideInSearch: true,
    },
    {
      title: '在职状态',
      width: 100,
      dataIndex: 'status',
      render: (_, entity) => {
        return entity.status === '在职' ? (
          <Tag color="success">是</Tag>
        ) : (
          <Tag color="default">否</Tag>
        );
      },
      valueEnum: {
        在职: { text: '在职' },
        离职: { text: '离职' },
      },
      hideInSearch: true,
    },
    {
      title: '角色',
      width: 250,
      dataIndex: 'roles',
      hideInSearch: true,
      renderText: (val: { name: string }[]) => {
        return val.map((item) => item.name).join(', ');
      },
      renderFormItem: () => {
        return (
          <Select
            showSearch
            placeholder="选择角色"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            allowClear
            options={roles?.map((role: { name: string; id: number }) => ({
              label: role.name,
              value: role.id,
            }))}
          />
        );
      },
    },
    {
      title: '创建时间',
      width: 250,
      hideInSearch: true,
      dataIndex: 'created_at',
      valueType: 'datetime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      render: (_, record) => [
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
          record.id !== 1 && (
          <a
            key="delete"
            onClick={() => {
              return Modal.confirm({
                title: '确认删除?',
                onOk: async () => {
                  await handleRemove([record.id!]);
                  setSelectedRows([]);
                  actionRef.current?.reloadAndRest?.();
                },
                content: '确定删除吗？',
                okText: '确认',
                cancelText: '取消',
              });
            }}
          >
            删除
          </a>
        ),
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.UserListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="id"
        // scroll={{x: 1200}}
        search={{
          labelWidth: 120,
        }}
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
        request={async (params, sort, filter) => queryList('/users', params, sort, filter)}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
          getCheckboxProps: (record) => ({
            disabled: record.id === 1, // 设置禁用条件
          }),
        }}
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
          const success = await handleAdd(value as API.UserListItem);
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
