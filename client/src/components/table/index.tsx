import React from 'react';

export const AssetCellRenderer = (params: any) => {
    const assetId = params['data']['asset-id'];
    const unitName = params['data']['unit-name'];
    return (
        <>
            <a href={'asset/' + assetId} style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <div />
                {
                    (assetId == 0 || assetId == 1) ?
                        <span>{params.value}</span>
                        : <div>
                            <span>{params.value}</span>
                            <span>${unitName} - {assetId}</span>
                        </div>
                }
            </a>
        </>
    );
};
