import { AssetCellRenderer } from ".";

export const AssetColumnDefs = [
    {
        field: 'name',
        headerName: 'Name',
        cellRenderer: AssetCellRenderer
    },
    {
        field: 'amount',
        valueFormatter: (params) => {
            if (Number(params['data'].balance) > 0 && !params['data'].name.toLowerCase().includes('pool')) {
                return `${Number(params['data'].balance || 0).toLocaleString()} ${params['data']['unit-name']}`;
            } else if (Number(params['data'].amount) > 0 && !params['data'].name.toLowerCase().includes('pool')) {
                return `${(Number(params['data'].amount) / 10 ** params['data'].decimals).toLocaleString()} ${params['data']['unit-name']}`;

            } else {
                return 0;
            }


        },
        cellRenderer: 'agAnimateShowChangeCellRenderer'

    },
    {
        field: 'price',
        headerName: 'Price',
        valueFormatter: (params) => {
            return params['data'].price || 0;
        },
        cellRenderer: 'agAnimateShowChangeCellRenderer'
    },
    {
        field: 'value',
        headerName: 'Value',
        valueFormatter: (params) => {
            return params.value || 0;
        },
        cellRenderer: 'agAnimateShowChangeCellRenderer',
        sort: 'desc'
    }
];