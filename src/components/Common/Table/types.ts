import { TablePaginationConfig } from 'antd';
import { ExpandableConfig } from 'antd/lib/table/interface';

export interface ITableProps {
  columns: any[];
  data?: any[];
  style?: any;
  loading?: boolean;
  pagination?: false | TablePaginationConfig;
  expandable?: ExpandableConfig<any>;
  rowKey?: string;
}
