import { useEffect, useState } from "react";
import { queryList } from '@/services/ant-design-pro/api';

const useQueryList = (url: string) => {
  const [items, setItems] = useState([]);

  const query = async () => {
    const response = await queryList(url, { pageSize: 10000 }) as any;
    if (response.success) {
      setItems(response.data)
    }
  }

  useEffect(() => {
    query().catch(console.error)
  }, [])

  return { items, setItems }
}

export default useQueryList;